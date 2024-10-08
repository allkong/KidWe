package yeomeong.common.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Controller
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOriginPatterns("*") // “*“같은 와일드카드를 사용
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE") // 허용할 HTTP method
            .allowCredentials(true);
    }
}
