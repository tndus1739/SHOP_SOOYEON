package com.shop.back.member.repository;

import com.shop.back.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
	Member findByEmail(String email);
}
