package com.shop.back.member.dto.param;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MemberUpdateRequest {

    private String nickname;
    private String pwd;
    private String currentPwd;
    private LocalDateTime birth;
}
