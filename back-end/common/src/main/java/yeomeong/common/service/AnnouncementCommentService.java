package yeomeong.common.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import yeomeong.common.dto.post.announcement.AnnouncementCommentCreateDto;
import yeomeong.common.entity.jpa.post.Announcement;
import yeomeong.common.entity.jpa.post.comment.AnnouncementComment;
import yeomeong.common.entity.jpa.post.comment.Comment;
import yeomeong.common.repository.jpa.AnnouncementRepository;

@Service
@RequiredArgsConstructor
public class AnnouncementCommentService {

    AnnouncementRepository announcementRepository;

    /**
     * 공지사항 (대)댓글 생성하기
     * 공지사항 (대)댓글 삭제하기
     */

    public void createComment(Long announcementId, Long memberId,AnnouncementCommentCreateDto announcementCommentCreateDto){
        Announcement announcement = announcementRepository.findById(announcementId)
                .orElseThrow(() -> new RuntimeException("해당 공지사항을 찾을 수 없습니다."));

        AnnouncementComment announcementComment =new AnnouncementComment();

        Comment comment = new Comment();
    }

}
