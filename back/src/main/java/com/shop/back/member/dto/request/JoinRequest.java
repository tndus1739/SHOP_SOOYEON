package com.shop.back.member.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class JoinRequest {

    @NotBlank
    private String name;

    @NotBlank
    private String nickname;

    @NotBlank
    private String email;

    @NotBlank
    private String pwd;

    @NotBlank
    private String checkPwd;

    @NotBlank
    private String gender;

    @NotNull
    private LocalDateTime birth;

    @NotBlank
    private String phone;


}
