package com.shop.back.member.repository;

import com.shop.back.Role;
import com.shop.back.member.dto.param.CreateMemberParam;
import com.shop.back.member.entity.Member;
import com.shop.back.member.entity.QMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
	Member findByEmail(String email);

	List<Member> findByRole(Role role);

	//검색
	List<Member> findByRoleAndNameContaining(Role role, String keyword);
	List<Member> findByRoleAndNicknameContaining(Role role, String nickname);
	List<Member> findByRoleAndEmailContaining(Role role, String email);
	List<Member> findByRoleAndPhoneContaining(Role role, String phone);

}