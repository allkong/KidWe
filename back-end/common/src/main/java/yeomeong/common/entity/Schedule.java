package yeomeong.common.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import yeomeong.common.entity.kindergarten.Ban;
import yeomeong.common.entity.kindergarten.Kindergarten;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Schedule {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ban_id")
    private Ban ban;

    @ManyToOne(fetch = FetchType.LAZY)
    private Kindergarten kindergarten;

    @Enumerated(EnumType.STRING)
    private ScheduleType scheduleType; //전체공지사항, 반 공지사항

    private String keyword;

    private String content;

    private LocalDate eventDate;

    private LocalTime createdTime;


    public Schedule(Kindergarten kindergarten,Ban ban, String keyword, String content, LocalDate eventDate, LocalTime createdTime, ScheduleType scheduleType) {
        this.kindergarten = kindergarten;
        this.ban =ban;
        this.keyword = keyword;
        this.content = content;
        this.eventDate = eventDate;
        this.createdTime = createdTime;
        this.setScheduleType(scheduleType);
    }

    public enum ScheduleType{
        ALLNOTICE, EVENT, CLASS
    }
}

