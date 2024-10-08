package yeomeong.common.dto.auth;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import yeomeong.common.entity.member.Member;
import yeomeong.common.entity.member.atype;
import yeomeong.common.entity.member.rtype;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class LoginResponseDto {

    private String accessToken;
    private String refreshToken;
    private Long memberId;
    private String memberEmail;
    private rtype memberRole;
    private atype memberStatus;
    private Long kindergartenId;
    private Long banId;
    private Long kidId;
//    private List<Long> kidIds;

    public static LoginResponseDto of(String accessToken, String refreshToken, Member member) {
        return LoginResponseDto.builder()
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .memberId(member.getId())
            .memberEmail(member.getEmail())
            .memberRole(member.getRole())
            .memberStatus(member.getMemberStatus())
            .build();
    }

}
