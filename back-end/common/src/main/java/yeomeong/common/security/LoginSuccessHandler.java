package yeomeong.common.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import yeomeong.common.dto.auth.LoginResponseDto;
import yeomeong.common.entity.member.Kid;
import yeomeong.common.entity.member.KidMember;
import yeomeong.common.entity.member.Member;
import yeomeong.common.entity.member.atype;
import yeomeong.common.repository.MemberRepository;
import yeomeong.common.security.jwt.JwtService;
import yeomeong.common.security.jwt.JwtUtil;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RequiredArgsConstructor
@Component
@Slf4j
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private final MemberRepository memberRepository;
    private final ObjectMapper objectMapper;
    private final JwtService jwtService;

    @Override
    @Transactional
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
        Authentication authentication) throws IOException {
        String accessToken = JwtUtil.createAccessToken(memberRepository.findByEmail(authentication.getName()));
        String refreshToken = JwtUtil.createRefreshToken(authentication.getName());
//        jwtService.saveRefreshToken(authentication.getName(), refreshToken);
//        log.info("refresh token: {}", refreshToken);
        Cookie refreshTokenCookie = createCookie(authentication.getName());
        jwtService.saveRefreshToken(authentication.getName(), refreshTokenCookie.getValue());
        log.debug("redis store data: {}", refreshTokenCookie.getValue());

        response.setStatus(HttpStatus.OK.value());
        response.addCookie(refreshTokenCookie);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());

        Member member = memberRepository.findByEmail(authentication.getName());
        LoginResponseDto loginResponseDto = LoginResponseDto.of(accessToken, refreshToken, member);

        if (member.getKindergarten() != null) {
            loginResponseDto.setKindergartenId(member.getKindergarten().getId());
        }

        if (member.getBan() != null) {
            loginResponseDto.setBanId(member.getBan().getId());
        }

        if (member.getKidMember() != null && member.getMemberStatus() == atype.ACCEPT) {
            List<KidMember> kidMembers = member.getKidMember();
            for (KidMember kidMember : kidMembers) {
                Kid kid = kidMember.getKid();
                loginResponseDto.setKidId(kid.getId());
                loginResponseDto.setKindergartenId(kid.getKindergarten().getId());
                loginResponseDto.setBanId(kid.getBan().getId());
            }
        }

        objectMapper.writeValue(response.getWriter(), loginResponseDto);
    }

     private Cookie createCookie(String userName) {
         String cookieName = "refreshToken";
         String cookieValue = JwtUtil.createRefreshToken((userName));
         Cookie cookie = new Cookie(cookieName, cookieValue);
         cookie.setHttpOnly(false);
         cookie.setSecure(true);
         cookie.setPath("/");
         cookie.setAttribute("SameSite", "None");
         cookie.setMaxAge(60 * 60 * 24 * 14);
         return cookie;
     }

}