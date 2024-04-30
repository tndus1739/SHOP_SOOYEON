package com.shop.back.cart.dto;

import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter
public class CartDetailDto {
	
	 private Long cartItemId; //장바구니 상품 아이디

	    private String name; 

	    private int price; 

	    private int productsCnt;

	    private String path; 
}
