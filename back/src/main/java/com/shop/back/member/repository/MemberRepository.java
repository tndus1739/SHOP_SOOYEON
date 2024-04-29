package com.shop.back.member.repository;

import com.shop.back.Role;
import com.shop.back.member.dto.param.CreateMemberParam;
import com.shop.back.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
	Member findByEmail(String email);

	List<Member> findByRole(Role role);

//	Integer isExistMemberEmail(String email);
//
//	Integer createMember(CreateMemberParam param);
}
