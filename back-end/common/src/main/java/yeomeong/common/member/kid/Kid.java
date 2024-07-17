package yeomeong.common.member.kid;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import yeomeong.common.ban.Ban;
import yeomeong.common.bus.Bus;
import yeomeong.common.member.kidParent;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Kid {

    @Id
    @GeneratedValue
    @JoinColumn(name = "kid_id")
    private Long id;
    @ManyToOne
    private Ban ban;

    @ManyToOne
    private Bus bus;

    @OneToMany
    private List<kidParent> kidParents = new ArrayList<>();

}
