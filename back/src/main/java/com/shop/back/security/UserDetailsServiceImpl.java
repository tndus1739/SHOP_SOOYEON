package com.shop.back.security;

import com.shop.back.member.entity.Member;
import com.shop.back.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final MemberRepository memberRepository;

    // username = User (id)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("UserDetailsServiceImpl loadUserByUsername " + new Date());

        Member member = memberRepository.findByEmail(username);
        if (member == null) {
            throw new UsernameNotFoundException(String.format("'%s'는 존재하지 않는 사용자입니다.", username));
        }

        return new UserDetailsImpl(member);
    }
}
