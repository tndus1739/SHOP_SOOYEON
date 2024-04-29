package com.shop.back.cart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shop.back.cart.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository <Cart, Long> {

	 Cart findByMemberId(Long memberId);
}
