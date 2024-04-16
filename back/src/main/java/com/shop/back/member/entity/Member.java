package com.shop.back.member.entity;

import com.shop.back.Role;
import com.shop.back.common.BaseEntity;
import jakarta.persistence.*;
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

}
