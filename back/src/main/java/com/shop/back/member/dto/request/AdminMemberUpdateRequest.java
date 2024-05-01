package com.shop.back.member.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.shop.back.Role;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@Setter
public class AdminMemberUpdateRequest {

    private Long id;
    private String name;
    private String nickname;
    private String email;
    private String pwd;
    private Role role;
    private String gender;
    private LocalDateTime birth;
    private String phone;
    private String Address;

}
