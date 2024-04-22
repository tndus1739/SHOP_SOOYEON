package com.shop.back.memberTest;

import com.shop.back.Role;
import com.shop.back.member.entity.Member;
import com.shop.back.member.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

@SpringBootTest
public class MemberCreateTest {

    @Autowired
    private MemberRepository memberRepository;

//    @Test
    public void memberTest() {
        Member m1 = new Member();
        m1.setName("knk");
        m1.setNickname("nakong");
        m1.setEmail("knk@aaa.com");
        m1.setPwd("1234");
        m1.setRole(Role.USER);
        m1.setGender("W");
        m1.setBirth(LocalDateTime.now());

        System.out.println("m1: " + m1);
        this.memberRepository.save(m1);

        Member m2 = new Member();
        m2.setName("ooo");
        m2.setNickname("oooo");
        m2.setEmail("oo@aaa.com");
        m2.setPwd("1234");
        m2.setRole(Role.USER);
        m2.setGender("M");
        m2.setBirth(LocalDateTime.now());

        System.out.println("m2: " + m2);
        this.memberRepository.save(m2);

    }
}
