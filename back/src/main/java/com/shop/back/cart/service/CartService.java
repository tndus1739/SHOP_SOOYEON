package com.shop.back.cart.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shop.back.cart.repository.CartRepository;
import com.shop.back.item.repository.ItemRepository;
import com.shop.back.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
@Transactional
public class CartService {

	
	private final ItemRepository itemRepository;
    private final MemberRepository memberRepository;
    private final CartRepository cartRepository;
	
	
}
