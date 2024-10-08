package yeomeong.common.service;

import java.time.LocalDateTime;
import java.time.ZoneId;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yeomeong.common.dto.post.dailynote.request.DailyNoteCommentRequestDto;
import yeomeong.common.dto.post.dailynote.response.DailyNoteCommentResponseDto;
import yeomeong.common.entity.member.Member;
import yeomeong.common.entity.member.rtype;
import yeomeong.common.entity.post.DailyNote;
import yeomeong.common.entity.post.comment.DailyNoteComment;
import yeomeong.common.exception.CustomException;
import yeomeong.common.exception.ErrorCode;
import yeomeong.common.repository.DailyNoteCommentRepository;
import yeomeong.common.repository.DailyNoteRepository;
import yeomeong.common.repository.MemberRepository;

@Service
@RequiredArgsConstructor
public class DailyNoteCommentService {
    private final MemberRepository memberRepository;
    private final DailyNoteRepository dailyNoteRepository;
    private final DailyNoteCommentRepository dailyNoteCommentRepository;

    // 알림장에 (대)댓글 생성하기
    @Transactional
    public DailyNoteCommentResponseDto createDailyNoteComment(Long writerId, Long dailyNoteId, DailyNoteCommentRequestDto dailyNoteCommentCreateRequestDto){
        // 존재하는 알림장인지 확인
        DailyNote dailyNote = dailyNoteRepository.findByDailyNoteId(dailyNoteId);
        if(dailyNote == null) throw new CustomException(ErrorCode.NOT_FOUND_DAILYNOTE_ID);
        // 존재하는 사용자인지 확인
        Member member =  memberRepository.findById(writerId).orElseThrow(
            () -> new CustomException(ErrorCode.NOT_FOUND_ID)
        );
        if(member == null) throw new CustomException(ErrorCode.NOT_FOUND_ID);
        // 알림장 발송자이거나
        // 알림장 수신자인 경우 조회 가능할 때 보여줘야 하는데
        // 현재 해당 조건은 알림장 조회에서 가능하니 생략하자
        DailyNoteComment parentDailyNoteComment = null;
        //대댓글이면
        if(dailyNoteCommentCreateRequestDto.getParentCommentId() > 0){
            parentDailyNoteComment = dailyNoteCommentRepository.findById(dailyNoteCommentCreateRequestDto.getParentCommentId()).orElseThrow(
                () -> new CustomException(ErrorCode.NOT_FOUND_WRITER)
            );
        }

        return new DailyNoteCommentResponseDto(writerId, dailyNoteCommentRepository.save(dailyNoteCommentCreateRequestDto.toEntity(dailyNote, member, parentDailyNoteComment)));
    }

    // 알림장에 (대)댓글 수정하기
    @Transactional
    public DailyNoteCommentResponseDto updateDailyNoteComment(Long writerId,
        Long dailyNoteId,
        Long dailyNoteCommentId,
        String updatedContent){
        // 해당 댓글이 없다면
        DailyNoteComment oldDailyNoteComment = dailyNoteCommentRepository.findById(dailyNoteCommentId).orElseThrow(
            () -> new CustomException(ErrorCode.NOT_FOUND_DAILYNOTE_COMMENT_ID)
        );
        // 해당 댓글을 수정할 권한이 없다면 
        if(!oldDailyNoteComment.getMember().getId().equals(writerId) || !oldDailyNoteComment.getDailyNote().getId().equals(dailyNoteId)) throw new CustomException(ErrorCode.UNAUTHORIZED_WRITER);

        oldDailyNoteComment.setNewContent(updatedContent);
        oldDailyNoteComment.update();
        return new DailyNoteCommentResponseDto(writerId, dailyNoteCommentRepository.save(oldDailyNoteComment));
    }

    // 알림장에 (대)댓글 삭제하기
    @Transactional
    public DailyNoteCommentResponseDto deleteDailyNoteComment(Long writerId,
        Long dailyNoteId,
        Long dailyNoteCommentId){
        DailyNoteComment oldDailyNoteComment = dailyNoteCommentRepository.findById(dailyNoteCommentId).orElseThrow(
             () -> new CustomException(ErrorCode.NOT_FOUND_DAILYNOTE_COMMENT_ID)
        );
        // 해당 댓글을 수정할 권한이 없다면
        if(!oldDailyNoteComment.getMember().getId().equals(writerId) || !oldDailyNoteComment.getDailyNote().getId().equals(dailyNoteId)) throw new CustomException(ErrorCode.UNAUTHORIZED_WRITER);

        oldDailyNoteComment.delete();
        System.out.println(oldDailyNoteComment.getIsDeleted());
        return new DailyNoteCommentResponseDto(writerId, dailyNoteCommentRepository.save(oldDailyNoteComment));
    }
}
