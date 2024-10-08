package yeomeong.common.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import yeomeong.common.document.Memo;
import yeomeong.common.document.Tag;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
public class MemoRequestDto {
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    private LocalDateTime updatedTime;

    private String lesson;
    private List<Kid> kids;
    private List<TagRequestDto> tags;
    private String content;

    public Memo toDocument(Long teacherId) {
        List<Tag> tags = new ArrayList<>();
//        if (this.tags != null && !this.tags.isEmpty()) {
//            for (TagRequestDto tagRequestDto : this.tags) {
//                tags.add(tagRequestDto.toDocument());
//            }
//        }

        return Memo.builder()
            .teacherId(teacherId)
            .updatedTime(this.updatedTime)
            .lesson(this.lesson == null ? "" : this.lesson)
            .kids(this.kids == null ? new ArrayList<>() : this.kids)
            .tags(tags)
            .content(this.content == null ? "" : this.content)
            .build();
    }
}
