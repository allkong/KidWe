package yeomeong.common.post.memo;


import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import yeomeong.common.member.teacher.Teacher;
import yeomeong.common.post.dailynote.DailyNote;
import yeomeong.common.post.Post;

@Entity
@Setter
@Getter
public class Memo extends Post {


    @ManyToOne
    private Teacher teacher;

    @ManyToOne
    private DailyNote dailyNote;

}
