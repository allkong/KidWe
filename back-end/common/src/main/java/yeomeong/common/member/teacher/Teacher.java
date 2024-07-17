package yeomeong.common.member.teacher;


import jakarta.persistence.Entity;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import yeomeong.common.ban.Ban;
import yeomeong.common.member.Member;
import yeomeong.common.post.announcement.Announcement;
import yeomeong.common.post.dailynote.DailyNote;
import yeomeong.common.post.diary.Diary;
import yeomeong.common.post.memo.Memo;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Teacher extends Member {


    @ManyToOne
    private Ban ban;

    private String picture;

    @OneToMany
    private List<Announcement> announcement = new ArrayList<>();
    @OneToMany
    private List<DailyNote> dailyNotes = new ArrayList<>();
    @OneToMany
    private List<Memo> memos = new ArrayList<>();
    @OneToMany
    private List<Diary> diaries = new ArrayList<>();



}
