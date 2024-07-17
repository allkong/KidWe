package yeomeong.common.ban;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import yeomeong.common.kindergarten.KinderGarten;

@Entity
@Getter
@Setter
public class Ban {

    @Id @GeneratedValue
    @JoinColumn(name = "ban_id")
    private Long id;

    private String name;

    @ManyToOne
    private KinderGarten kinderGarten;

}
