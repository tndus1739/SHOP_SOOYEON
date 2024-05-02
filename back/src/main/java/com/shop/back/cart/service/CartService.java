package com.shop.back.cart.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shop.back.cart.dto.CartDetailDto;
import com.shop.back.cart.dto.CartItemDto;
import com.shop.back.cart.entity.Cart;
import com.shop.back.cart.entity.CartItem;
import com.shop.back.cart.repository.CartItemRepository;
import com.shop.back.cart.repository.CartRepository;
import com.shop.back.item.entity.Item;
import com.shop.back.item.repository.ItemRepository;
import com.shop.back.member.entity.Member;
import com.shop.back.member.repository.MemberRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
@Transactional
public class CartService {

	
	private final ItemRepository itemRepository;
    private final MemberRepository memberRepository;
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
	
    // 장바구니 추가
    
    public Long addCart (CartItemDto cartItemDto, String email) {
    	
    	Item item = itemRepository.findById(cartItemDto.getItemId()).orElseThrow(EntityNotFoundException::new);
    	
    	Member member = memberRepository.findByEmail(email);
    	
    	Cart cart = cartRepository.findByMemberId(member.getId());
    	
    	if (cart == null) {
    		cart = Cart.createCart(member);
    		cartRepository.save(cart);
    	}
    
	
	  // 기존에 등록하는 제품이 cartItem 테이블에 존재하는지 확인
	
	CartItem savedCartItem = cartItemRepository.findByCartIdAndItemId(cart.getId(), item.getId());
	

    if(savedCartItem != null){   // 제품이 장바구니에 존재하면 개수만 증가
    	
        savedCartItem.addCount(cartItemDto.getCount());
        return savedCartItem.getId();
    } else {		// 기존에 제품이 장바구니에 존재하지 않으면 전체를 update
        CartItem cartItem = CartItem.createCartItem(cart, item, cartItemDto.getCount());
        cartItemRepository.save(cartItem);
        return cartItem.getId();
    }
}
	
    // 장바구니 조회
    
//	public List<CartDetailDto> getCartList(String email){
//
//        List<CartDetailDto> cartDetailDtoList = new ArrayList<>();
//
//        Member member = memberRepository.findByEmail(email);
//        
//        Cart cart = cartRepository.findByMemberId(member.getId());
//        
//        if(cart == null){
//            return cartDetailDtoList;
//        }
//
//        cartDetailDtoList = cartItemRepository.findCartDetailDtoList(cart.getId());
//        return cartDetailDtoList;
//    }

	
	


}
