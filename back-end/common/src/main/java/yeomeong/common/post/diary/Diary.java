package yeomeong.common.post.diary;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import yeomeong.common.member.teacher.Teacher;
import yeomeong.common.post.Post;


@Entity
@Getter
@Setter
public class Diary extends Post {

    private Teacher teacher;
}
