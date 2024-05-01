import com.shop.back.jwt.JwtTokenUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

public class JwtTokenUtilTest {

    @InjectMocks
    private JwtTokenUtil jwtTokenUtil;

    @Mock
    private UserDetails userDetails;

    private String mockToken;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        // 시크릿 키 설정
        String secretKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAPOK90W0fHTB0VNxwcTSwsS4OOfbqbg2FEMTjX37A57jmXg4yemfSqYDNR+mSr/Z09MZ0oCIuliEgMUicqcOtdkCAwEAAQ==";
        jwtTokenUtil.setSecret(secretKey);
        // UserDetails 객체가 null이 아닌 값을 반환하도록 설정
        when(userDetails.getUsername()).thenReturn("테스트");


        // JWT 토큰 생성
        mockToken = jwtTokenUtil.generateToken(userDetails);
    }

//    @Test
    public void testGenerateToken() {
        assertNotNull(mockToken);
    }

//    @Test
    public void testGetUsernameFromToken() {
        String username = jwtTokenUtil.getUsernameFromToken(mockToken);
        assertEquals(userDetails.getUsername(), username);
    }

    @Test
    public void testGetExpirationDateFromToken() {
        Date expirationDate = jwtTokenUtil.getExpirationDateFromToken(mockToken);
        assertNotNull(expirationDate);
    }

    @Test
    public void testValidateToken() {
        // JWT 토큰 검증 테스트
        boolean isValid = jwtTokenUtil.validateToken(mockToken, userDetails);

        // 검증 결과 확인
        assertEquals(true, isValid);
    }
}
