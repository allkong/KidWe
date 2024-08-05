package yeomeong.common.entity.post.comment;


import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import yeomeong.common.entity.member.Member;
import yeomeong.common.entity.post.Announcement;
import yeomeong.common.entity.post.DailyNote;

@Entity

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DailyNoteComment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "daily_note_id")
    private DailyNote dailyNote;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    private DailyNoteComment parentComment;

    @OneToMany(mappedBy = "parentComment",cascade = CascadeType.ALL)
    private List<DailyNoteComment> replies;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Boolean isDeleted;

    public void setNewContet(String content) {
        this.content = content;
    }

    public void delete(){
        this.isDeleted = true;
    }

    public void update(){
        this.updatedAt = LocalDateTime.now();
    }

}
