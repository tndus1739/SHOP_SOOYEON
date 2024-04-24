package com.shop.back.member.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
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


    private LocalDateTime birth;

    private String birthString;

    @NotBlank
    private String phone;


}
