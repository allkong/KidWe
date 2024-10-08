package yeomeong.common.security.jwt;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class JwtService {

    private final static String LOGOUT = "logout";
    private final JwtRepository refreshTokenRepository;

    public void saveRefreshToken(String email, String refreshToken) {
        log.info("save refresh token: {}", email);
        log.info("refresh token: {}", refreshToken);
        refreshTokenRepository.save(email, refreshToken, JwtUtil.getExpiredTime(refreshToken));
    }

    public void saveLogoutAccessToken(String accessToken) {
        refreshTokenRepository.save(accessToken, LOGOUT, JwtUtil.getExpiredTime(accessToken));
    }

    public boolean isTokenStored(String token) {
        String savedToken = refreshTokenRepository.findByKey(JwtUtil.getLoginEmail(token));
        if(savedToken == null) {
            return false;
        }
        return savedToken.equals(token);
    }

    public boolean isLogoutAccessToken(String accessToken) {
        return refreshTokenRepository.hasKey(accessToken);
    }

    public void deleteRefreshToken(String email) {
        refreshTokenRepository.delete(email);
    }

}