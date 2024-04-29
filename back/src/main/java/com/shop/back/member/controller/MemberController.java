package com.shop.back.member.controller;

import com.shop.back.jwt.JwtTokenUtil;
import com.shop.back.member.dto.request.AdminMemberUpdateRequest;
import com.shop.back.member.dto.request.MemberUpdateRequest;
import com.shop.back.member.dto.request.JoinRequest;
import com.shop.back.member.dto.request.LoginRequest;
import com.shop.back.member.dto.response.JoinResponse;
import com.shop.back.member.dto.response.LoginResponse;
import com.shop.back.member.entity.Member;
import com.shop.back.member.exception.MemberException;
import com.shop.back.member.repository.MemberRepository;
import com.shop.back.member.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@RestController
@RequestMapping("/member")
public class MemberController {

    private final MemberService service;
    private final MemberRepository memberRepository;
    private final JwtTokenUtil jwtTokenUtil;
    private final BCryptPasswordEncoder passwordEncoder;

    public MemberController(MemberService service, MemberRepository memberRepository, JwtTokenUtil jwtTokenUtil, BCryptPasswordEncoder passwordEncoder) {
        this.service = service;
        this.memberRepository = memberRepository;
        this.jwtTokenUtil = jwtTokenUtil;
        this.passwordEncoder = passwordEncoder;
    }


    @GetMapping
    public ResponseEntity<?> checkEmailDuplicate(@RequestParam("email") String email) {
        System.out.println("이메일 중복 요청 성공: " + email);
        System.out.println("MemberController checkEmailDuplicate " + new Date());

        HttpStatus status = service.checkEmailDuplicate(email);
        return new ResponseEntity<>(status);
    }

    //회원가입
    @PostMapping("/join")
    public ResponseEntity<JoinResponse> join(@Valid @RequestBody JoinRequest req) {
        System.out.println("MemberController join " + new Date());

        return ResponseEntity.ok(service.join(req));
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest req) {
        System.out.println("MemberController login " + new Date());
        
        return ResponseEntity.ok(service.login(req));
    }

    //로그아웃
//    @PostMapping("/logout")
//    public ResponseEntity logout(HttpServletRequest request , HttpServletResponse response){
//        refreshService.logout(request, response);
//        return ResponseEntity.ok().build();
//    }

    //정보 조회
    @GetMapping("/mypage")
    public String myPage(Model model) {

        //현재 사용자의 인증 정보
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        //인증 정보에서 사용자의 정보 출력
        String nickname = authentication.getName();

        model.addAttribute("nickname", nickname);

        return "mypage";
    }



    //비밀번호 일치 확인
    @GetMapping("/checkPwd")
    public ResponseEntity<String> checkPassword(@RequestParam("insertPwd") String insertPwd, @RequestHeader("Authorization") String token) {
        //JWT 토큰에서 사용자 이메일 추출
        String memberEmail = jwtTokenUtil.getUsernameFromToken(token);

        //사용자의 존재 여부 확인
        Member member = memberRepository.findByEmail(memberEmail);
        if (member == null) {
            return new ResponseEntity<>("사용자를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
        }

        //기존 비밀번호 확인
        if (!passwordEncoder.matches(insertPwd, member.getPwd())) {
            return new ResponseEntity<>("기존 비밀번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        //비밀번호 일치
        return new ResponseEntity<>("비밀번호가 일치합니다.", HttpStatus.OK);

    }

    //정보 수정
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateMember(@PathVariable Long id, @RequestBody MemberUpdateRequest req, @RequestHeader("Authorization") String token) {
        System.out.println(req.getBirth());
        System.out.println(req.getNickname());
        System.out.println(req.getPwd());

        System.out.println("토큰 출력 : "  + token);

        //클라이언트 요청의 유효성 검증
        ResponseEntity<String> validationResponse = validateRequest(req);
        if (validationResponse != null) {
            return validationResponse;
        }

        //JWT 토큰에서 사용자 이메일 추출
        String memberEmail = jwtTokenUtil.getUsernameFromToken(token);

        //사용자의 존재 여부 확인
        Member member = memberRepository.findByEmail(memberEmail);
        if (member == null) {
            return new ResponseEntity<>("사용자를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
        }

        //정보 수정 권한 확인
        if (!member.getId().equals(id)) {
            return new ResponseEntity<>("해당 사용자의 정보를 수정할 수 있는 권한이 없습니다.", HttpStatus.FORBIDDEN);
        }

        //수정된 비밀번호를 BCrypt 알고리즘을 사용하여 해싱
        String hashedPassword = passwordEncoder.encode(req.getPwd());

        //회원 정보 수정
        boolean update = service.updateMember(id, req.getNickname(), hashedPassword, req.getBirth());
        if (update) {
            return new ResponseEntity<>("정보 수정이 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("정보 수정을 실패하였습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //클라이언트 요청의 유효성을 검증하는 메서드
    private ResponseEntity<String> validateRequest(MemberUpdateRequest req) {
        // 닉네임, 비밀번호, 생년월일 중 적어도 하나가 변경되어야 합니다.
        if (req.getNickname() == null && req.getPwd() == null && req.getBirth() == null) {
            return new ResponseEntity<>("변경할 필드가 전송되지 않았습니다.", HttpStatus.BAD_REQUEST);
        }

        // 모든 검증을 통과했다면 null을 반환하여 요청이 유효함을 나타냄
        return null;
    }

    //회원 탈퇴 (Role: UNREGISTER으로 변경)
    @PatchMapping("/withdraw/{email}")
    public ResponseEntity<String> withdrawMember(@PathVariable String email, @RequestHeader("Authorization") String token) {

        //JWT 토큰에서 사용자 이메일 추출
        String memberEmail = jwtTokenUtil.getUsernameFromToken(token);
        System.out.println("token: " + token);

        //사용자의 존재 여부 확인
        Member member = memberRepository.findByEmail(memberEmail);
        if (member == null) {
            return new ResponseEntity<>("사용자를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
        }
        System.out.println("memberEmail: " + memberEmail);

        ResponseEntity<String> validationResponse = validateWithdrawRequest(memberEmail, email);
            if (validationResponse != null) {
                return validationResponse;
        }

        System.out.println("email: " + email);

        if (service.withdrawMember(email)) {
            return ResponseEntity.ok("회원 탈퇴가 완료되었습니다");
        } else {
            return new ResponseEntity<>("사용자를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
        }
    }

    //탈퇴 검증
    public ResponseEntity<String> validateWithdrawRequest(String memberEmail, String requestEmail) {

        System.out.println("requestEmail: " + requestEmail);

        if (!memberEmail.equals(requestEmail)) {
            return new ResponseEntity<>("탈퇴할 권한이 없습니다.", HttpStatus.FORBIDDEN);
        }
        return null;
    }

    //요청 DTO 검증 예외처리 핸들러
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        System.out.println("MemberController handleMethodArgumentNotValidException " + new Date());

        BindingResult bs = e.getBindingResult();
        StringBuilder sb = new StringBuilder();
        bs.getFieldErrors().forEach(err -> {
            sb.append(String.format("[%s]: %s.\n입력된 값: %s",
                    err.getField(), err.getDefaultMessage(), err.getRejectedValue()));
        });

        return new ResponseEntity<>(sb.toString(), HttpStatus.BAD_REQUEST);

    }

    //사용자 관련 요청 예외처리 핸들러
    @ExceptionHandler(MemberException.class)
    public ResponseEntity<?> handleUserException(MemberException e) {
        System.out.println("UserController handlerUserException " + new Date());

        return new ResponseEntity<>(e.getMessage(), e.getStatus());
    }
}
