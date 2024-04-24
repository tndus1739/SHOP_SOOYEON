package com.shop.back.member.entity;

import com.shop.back.Role;
import com.shop.back.common.BaseEntity;
import com.shop.back.member.dto.request.JoinRequest;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Member extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;                    //  이름

	private String nickname;

	@Column(unique = true)
	private String email;                   //  이메일(아이디)

	private String pwd;                     //  비밀번호

	@Enumerated(EnumType.STRING)
	private Role role;

	private String gender;                  //  성별

	private LocalDateTime birth;            //  생년월일

	private String phone;            //  휴대폰 번호


	public Member() {
		this.role = Role.USER;
	}

	public Member(String name, String nickname, String email, String pwd, String gender, LocalDateTime birth, String phone) {
		super();
		this.name = name;
		this.nickname = nickname;
		this.email = email;
		this.pwd = pwd;
		this.gender = gender;
		this.birth = birth;
		this.phone = phone;
	}

	public void CreateMemberParam(JoinRequest req, String encodePassword) {
		this.name = req.getName();
		this.nickname = req.getNickname();
		this.email = req.getEmail();
		this.pwd = encodePassword;
		this.gender = req.getGender();
		this.birth = req.getBirth();
		this.phone = req.getPhone();
	}

}
