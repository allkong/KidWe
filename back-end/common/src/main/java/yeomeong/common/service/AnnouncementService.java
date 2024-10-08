package yeomeong.common.service;

import com.amazonaws.services.s3.AmazonS3;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import yeomeong.common.dto.post.announcement.*;

import yeomeong.common.entity.member.KidMember;
import yeomeong.common.entity.member.Member;
import yeomeong.common.entity.member.rtype;
import yeomeong.common.entity.post.*;
import yeomeong.common.entity.post.comment.AnnouncementComment;
import yeomeong.common.repository.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import static yeomeong.common.util.FileUtil.uploadOriginalAndThumbnailToS3;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AnnouncementService {

    private final AnnouncementRepository announcementRepository;
    private final MemberRepository memberRepository;
    private final AnnouncementImageRepository announcementImageRepository;
    private final AmazonS3 s3Client;
    private final VoteRepository voteRepository;
    private final VoteItemRepository voteItemRepository;

    @Value("${aws.s3.bucket-name}")
    private String bucketName;

    /**
     * 유치원별 공지사항 생성하기 (원장님)
     * 반 별 공지사항 생성하기 (선생님)
     */
    @Transactional
    public void createAnnouncementByKindergarten(Long memberId, AnnouncementCreateDto announcementCreateDto,VoteCreateDto voteCreateDto ,List<MultipartFile> images) throws Exception {

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RuntimeException("해당 맴버가 없어용"));

        Post post =new Post(LocalDateTime.now(ZoneId.of("Asia/Seoul")),
                announcementCreateDto.getTitle(),
                announcementCreateDto.getContent());

        Announcement announcement =new Announcement(
                post,
                member);

        announcement.setStored(false);

        if(images != null ){
            for( MultipartFile image : images){

                String fileName = uploadOriginalAndThumbnailToS3(s3Client, bucketName, image);

                AnnouncementImage announcementImage =new AnnouncementImage(
                        fileName,
                        announcement
                );
                announcementImageRepository.save(announcementImage);
                announcement.getAnnouncementImages().add(announcementImage);

            }
        }

        if(voteCreateDto != null && !voteCreateDto.getTitle().isEmpty()) {


            List<VoteItem> voteItems = new ArrayList<>();

            for(VoteItemRequestDto voteItemDto : voteCreateDto.getItems()) {
                VoteItem voteItem = new VoteItem(voteItemDto.getItemName());
                voteItems.add(voteItem);
                voteItemRepository.save(voteItem);
            }

            Vote vote =new Vote(voteCreateDto.getTitle(),
                    voteCreateDto.getVoteStartDate(),
                    voteCreateDto.getVoteEndDate(),
                    voteItems,
                    announcement);

            for (VoteItem voteItem : voteItems) voteItem.setVote(vote);
            
            voteRepository.save(vote);

        }

        announcementRepository.save(announcement);
    }

     /** 유치원별 공지사항 조회하기
     * 반별 공지사항 조회하기
     * 공지사항 조회하기
     */
     public List<AnnouncementListDto> getAnnouncementList(Long memberId, Long kindergartenId){
         Member member = memberRepository.findById(memberId)
                 .orElseThrow(() -> new RuntimeException("해당 멤버를 찾을 수 없습니다."));

         // 전체 유치원 공지사항 가져오기
         List<AnnouncementListDto> announcementByAllNotice = announcementRepository.getAnnouncementByAllNotice(kindergartenId);
         System.out.println("Test: " + announcementByAllNotice.size());
         List<AnnouncementListDto> announcementDtoList = new ArrayList<>(announcementByAllNotice);
         System.out.println("Test: " + announcementDtoList.size());

         //전체 공지사항 가져오기
         //원장님일 때 해당 유치원 반 공지사항 모두 가져오기
         if(member.getRole() == rtype.ROLE_DIRECTOR) {
             List<AnnouncementListDto> announcementByAllBan = announcementRepository.getAnnouncementByAllBan(kindergartenId);
             announcementDtoList.addAll(announcementByAllBan);
         }
         //선생님일 땐 해당 반 가져오기
         else if(member.getRole() == rtype.ROLE_TEACHER){
             List<AnnouncementListDto> announcementByBan = announcementRepository.getAnnouncementByBan(member.getBan().getId());
             announcementDtoList.addAll(announcementByBan);
         }
         // 학부모인 경우
          else {
             List<KidMember> kidMembers = member.getKidMember();
             for (KidMember kidMember : kidMembers) {
                 List<AnnouncementListDto> announcementByBan = announcementRepository.getAnnouncementByBan(kidMember.getKid().getBan().getId());
                 announcementDtoList.addAll(announcementByBan);
             }

//             List<KidMember> kidMembers = member.getKidMember();
//             for (KidMember kidMember : kidMembers) {
//                 Kid kid = kidMember.getKid();
//                 loginResponseDto.setKidId(kid.getId());
//                 loginResponseDto.setKindergartenId(kid.getKindergarten().getId());
//                 loginResponseDto.setBanId(kid.getBan().getId());
//             }
         }

         for(AnnouncementListDto announcementOne : announcementDtoList){
             if(announcementOne.getMemberBan() == null){
                 announcementOne.setMemberBan("전체");
             }
         }
         if(announcementDtoList.size() > 1)
            announcementDtoList.sort((o1, o2) -> o2.getCreatedDate().compareTo(o1.getCreatedDate())); //시간 별 정렬

         return announcementDtoList;
     }

    public AnnouncementDetailDto getAnnouncementDetail(Long memberId, Long announcementId) {

         Announcement announcement = announcementRepository.findById(announcementId)
                 .orElseThrow(() -> new RuntimeException("해당 공지사항을 찾을 수 없습니다."));

        List<AnnouncementCommentDto> announcementCommentDto = new ArrayList<>();

        for(AnnouncementComment announcementComment : announcement.getCommentList()) {
            if(announcementComment.getParentComment() != null ) continue;
            AnnouncementCommentDto parentComment = new AnnouncementCommentDto(
                    announcementComment.getId(), // id
                    announcementComment.getMember().getPicture(), // picture
                    announcementComment.getMember().getRole(), // role
                    announcementComment.getMember().getRole() == rtype.ROLE_GUARDIAN ? // name
                            announcementComment.getMember().getKidMember().get(0).getKid().getName(): announcementComment.getMember().getName(),
                    announcementComment.getMember().getRole() == rtype.ROLE_TEACHER ? // banName
                            announcementComment.getMember().getBan().getName() :
                            (announcementComment.getMember().getRole() == rtype.ROLE_GUARDIAN ?
                    announcementComment.getMember().getKidMember().get(0).getKid().getBan().getName() : null),
                    announcementComment.getContent(), // content
                    announcementComment.getLocalDateTime(), // createdTime
                    memberId.equals(announcementComment.getMember().getId()) // canDelete
            );

            List<AnnouncementCommentChildDto> childCommentDto = new ArrayList<>();
            for(AnnouncementComment childComment : announcementComment.getReplies()) {
                childCommentDto.add(new AnnouncementCommentChildDto(
                        childComment.getId(), // id
                        childComment.getMember().getPicture(), // picture
                        childComment.getMember().getRole(), // role
                        childComment.getMember().getRole() == rtype.ROLE_GUARDIAN ? // writerName
                        childComment.getMember().getKidMember().get(0).getKid().getName() : childComment.getMember().getName(),
                        announcementComment.getMember().getRole() == rtype.ROLE_TEACHER ? // banName
                                announcementComment.getMember().getBan().getName() :
                                (announcementComment.getMember().getRole() == rtype.ROLE_GUARDIAN ?
                                        announcementComment.getMember().getKidMember().get(0).getKid().getBan().getName() : null),
                        childComment.getContent(), // content
                        childComment.getLocalDateTime(), // createTime
                        memberId.equals(childComment.getMember().getId()) // canDelete
                ));
            }

            parentComment.setChilds(childCommentDto);
            announcementCommentDto.add(parentComment);
        }

        List<VoteItemDto> voteItemDtoList = new ArrayList<>();
        Vote vote =  announcement.getVote();


        if (vote != null) {
            for (VoteItem voteItem : vote.getItems()) {
                voteItemDtoList.add(new VoteItemDto(voteItem.getId(),
                        voteItem.getItemName(), voteItem.getValue()));
            }
        }

        List<AnnouncementImage> announcementImages = announcement.getAnnouncementImages();

        List<String> images = new ArrayList<>();

        if(announcementImages != null) {
            for (AnnouncementImage image : announcementImages) {
                images.add(image.getImageUrl());
            }
        }

        // AnnouncementDetailDto를 생성하여 반환
        return new AnnouncementDetailDto(
                announcement.getMember().getPicture(),
                announcement.getMember().getRole(),
                announcement.getMember().getBan() != null? announcement.getMember().getBan().getName() : "전체",
                announcement.getPost(),
                !images.isEmpty() ? images : null,
                vote != null ? vote.getId() : null, // Vote가 없으면 null
                voteItemDtoList, // VoteItemDto 리스트는 비어있을 수 있음
                announcement.getCommentList().size(),
                announcementCommentDto, // CommentDto 리스트는 비어있을 수 있음
                memberId.equals(announcement.getMember().getId())
        );

    }


    //공지사항 수정하기
    @Transactional
    public void updateAnnouncement(Long announcementId, AnnouncementCreateDto announcementCreateDto) {

         Announcement announcement = announcementRepository.findById(announcementId)
                 .orElseThrow(() -> new RuntimeException("해당 공지사항을 수정할 수 없습니다."));

        Post post =new Post(
                announcementCreateDto.getTitle(),
                announcementCreateDto.getContent());

        announcement.setPost(post);
         announcementRepository.save(announcement);
    }


    //공지사항 삭제하기
    @Transactional
    public void deleteAnnouncement(Long announcementId) {
        Announcement announcement = announcementRepository.findById(announcementId)
                .orElseThrow(() -> new RuntimeException("해당 공지사항이 없으세요"));

        announcement.setDeleted(true);

    }

    /**
     * 공지사항 임시저장 CRUD
     */
    //임시저장하기
    @Transactional
    public void createAnnouncementStorage(Long memberId, AnnouncementCreateDto announcementCreateDto){

        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new RuntimeException("해당 멤버를 찾을 수 없습니다."));

        Post post =new Post(LocalDateTime.now(),
                announcementCreateDto.getTitle(),
                announcementCreateDto.getContent());
        Announcement announcement = new Announcement(post, member);
        announcement.setStored(true);
        announcementRepository.save(announcement);
    }

    //임시저장 목록 불러오기
    public List<AnnouncementStorageListDto> getAnnouncementStorage(Long memberId){


        List<Announcement> announcementList = announcementRepository.findAllByStoredTrueAndMember_Id(memberId);

        List<AnnouncementStorageListDto> announcementStorageList = new ArrayList<>();

        for(Announcement announcement : announcementList) {
            announcementStorageList.add(new AnnouncementStorageListDto(announcement.getPost().getTitle(),
                    announcement.getPost().getCreatedDateTime().toLocalDate(),announcement.getId()));
        }

        return announcementStorageList;
    }

    //불러온 임시저장 선택하기
    public AnnouncementCreateDto getAnnouncementStoredDetail(Long announcementId){
        Announcement announcement = announcementRepository.findById(announcementId)
                .orElseThrow(() -> new RuntimeException("해당 임시저장 공지사항을 찾을 수 없습니다"));

        return new AnnouncementCreateDto(announcement.getPost());
    }
}

