package com.shop.back.member.service;

import com.shop.back.jwt.JwtTokenUtil;
import com.shop.back.member.dto.param.CreateMemberParam;
import com.shop.back.member.dto.request.JoinRequest;
import com.shop.back.member.dto.request.LoginRequest;
import com.shop.back.member.dto.response.JoinResponse;
import com.shop.back.member.dto.response.LoginResponse;
import com.shop.back.member.entity.Member;
import com.shop.back.member.exception.MemberException;
import com.shop.back.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder encoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserDetailsService userDetailsService;

    public HttpStatus checkEmailDuplicate(String email) {
        isExistMemberEmail(email);
        return HttpStatus.OK;
    }

    @Transactional
    public JoinResponse join(JoinRequest req) {

        saveMember(req);
        authenticate(req.getEmail(), req.getPwd());

        return new JoinResponse(req.getEmail());
    }

    private void saveMember(JoinRequest req) {
        //이메일(아이디) 중복 확인
        isExistMemberEmail(req.getEmail());

        //패스워드 일치 확인
        checkPwd(req.getPwd(), req.getCheckPwd());

        //회원 정보 생성
        String encodePassword = encoder.encode(req.getPwd());
//        CreateMemberParam param = new CreateMemberParam(req, encodePassword);
        Member mb = new Member();
        mb.CreateMemberParam(req, encodePassword);

        Member result = memberRepository.save(mb);
        if (result.getId() == null) {
            throw new MemberException("회원 등록을 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public LoginResponse login(LoginRequest req) {
        authenticate(req.getEamil(), req.getPwd());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(req.getEamil());
        final String token = jwtTokenUtil.generateToken(userDetails);

        System.out.println("인증 성공 토큰 출력: " + token);
        System.out.println("이메일(아이디) 출력: " + req.getEamil());

        return new LoginResponse(token, req.getEamil());
    }

    private void authenticate(String email, String pwd) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, pwd));
        } catch (DisabledException e) {
            throw new MemberException("인증되지 않은 이메일입니다.", HttpStatus.BAD_REQUEST);
        } catch (BadCredentialsException e) {
            throw new MemberException("비밀번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }
    }

    private void isExistMemberEmail(String email) {
        int result = 0;
//        Integer result = memberRepository.isExistMemberEmail(email);
        if (result == 1) {
            throw new MemberException("이미 사용 중인 이메일입니다.", HttpStatus.BAD_REQUEST);
        }
    }

    private void checkPwd(String pwd, String checkPwd) {
        if (!pwd.equals(checkPwd)) {
            throw new MemberException("비밀번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }
    }
}
