package com.shop.back.cart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.shop.back.cart.dto.CartDetailDto;
import com.shop.back.cart.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
	
	CartItem findByCartIdAndItemId(Long cartId, Long itemId);
	
	
//	List<CartDetailDto> findCartDetailDtoList(@Param("cartId") Long cartId);
}
