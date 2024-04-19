package com.shop.back.member.dto.response;

public class JoinResponse {

    private String email;

    public JoinResponse(String email) {this.email = email;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}
}
