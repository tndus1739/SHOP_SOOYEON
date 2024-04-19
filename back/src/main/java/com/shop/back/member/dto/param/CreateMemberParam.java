package com.shop.back.member.dto.param;

import com.shop.back.member.dto.request.JoinRequest;

import java.time.LocalDateTime;

public class CreateMemberParam {

    private String name;
    private String nickname;
    private String email;
    private String pwd;
    private String gender;
    private LocalDateTime birth;

//    public CreateMemberParam(JoinRequest req, String encodePassword) {
//        this.name = req.getName();
//        this.nickname = req.getNickname();
//        this.email = req.getEmail();
//        this.pwd = req.getPwd();
//        this.gender = req.getGender();
//        this.birth = req.getBirth();
//    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDateTime getBirth() {
        return birth;
    }
    public void setBirth(LocalDateTime birth) {
        this.birth = birth;
    }
}
