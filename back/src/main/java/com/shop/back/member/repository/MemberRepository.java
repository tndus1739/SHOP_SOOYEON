package com.shop.back.member.repository;

import com.shop.back.member.dto.param.CreateMemberParam;
import com.shop.back.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
	Member findByEmail(String email);

//	Integer isExistMemberEmail(String email);
//
//	Integer createMember(CreateMemberParam param);
}
