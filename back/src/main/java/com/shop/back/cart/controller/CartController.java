package com.shop.back.cart.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shop.back.cart.dto.CartItemDto;
import com.shop.back.cart.service.CartService;
import com.shop.back.item.repository.ItemRepository;
import com.shop.back.item.service.ItemService;
import com.shop.back.member.entity.Member;
import com.shop.back.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CartController {
	
	private final CartService cartService;
	private final MemberRepository memberRepository;
	private final ItemService itemService;
	private final ItemRepository itemRepository;

	//  장바구니에 상품 추가
	

//	    public ResponseEntity<?> addCart (@RequestBody CartItemDto cartItemDto , String email)
//	{ 
//	        Member member = memberRepository.findByEmail(cartItemDto.getEmail());
//	        Long cartItemId;
//
//	        try {
//
//	        	cartItemId = cartService.addCart(cartItemDto, email);
//
//			} catch (Exception e) {
//				return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
//			}
//
//	        return new ResponseEntity<Long>(cartItemId, HttpStatus.OK);
//	    }

	@PostMapping("/cart")
	
		 public ResponseEntity<?> addCart(@RequestBody List<CartItemDto> cartItems ) {
		        List<Long> cartItemIds = new ArrayList<>();
		        for (CartItemDto cartItemDto : cartItems) {
		            try {
		            	Member member = memberRepository.findByEmail(cartItemDto.getEmail());
		                if (member == null || !member.getEmail().equals(cartItemDto.getEmail())) {
		                    return new ResponseEntity<String>("이메일이 유효하지 않습니다: " + cartItemDto.getEmail(), HttpStatus.BAD_REQUEST);
		                }
		                Long cartItemId = cartService.addCart(cartItemDto, cartItemDto.getEmail());
		                cartItemIds.add(cartItemId);
		            } catch (Exception e) {
		                return new ResponseEntity<String>("처리 중 오류 발생: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		            }
		        }
		        return new ResponseEntity<List<Long>>(cartItemIds, HttpStatus.OK);
		    }
		

   // 장바구니 조회 
   
//   @GetMapping("/member/{id}/cart")
//   public String orderHist(Principal principal, Model model){
//   	
//   	
//   	
//       List<CartDetailDto> cartDetailList = cartService.getCartList(principal.getName());
//       model.addAttribute("cartItems", cartDetailList);
//       return "cart/cartList";
//   }

   //@PatchMapping : 수정, 업데이트  
//   @PutMapping(value = "/cartItem/{cartItemId}")
//   public @ResponseBody ResponseEntity updateCartItem(@PathVariable("cartItemId") Long cartItemId, 
//   		int count, Principal principal){
//
//       if(count <= 0){
//           return new ResponseEntity<String>("최소 1개 이상 담아주세요", HttpStatus.BAD_REQUEST);
//       } else if(!cartService.validateCartItem(cartItemId, principal.getName())){
//           return new ResponseEntity<String>("수정 권한이 없습니다.", HttpStatus.FORBIDDEN);
//       }
//
//       cartService.updateCartItemCount(cartItemId, count);
//       return new ResponseEntity<Long>(cartItemId, HttpStatus.OK);
//   }
//
//   @DeleteMapping(value = "/cartItem/{cartItemId}")
//   public @ResponseBody ResponseEntity deleteCartItem(@PathVariable("cartItemId") Long cartItemId, Principal principal){
//
//       if(!cartService.validateCartItem(cartItemId, principal.getName())){
//           return new ResponseEntity<String>("수정 권한이 없습니다.", HttpStatus.FORBIDDEN);
//       }
//
//       cartService.deleteCartItem(cartItemId);
//
//       return new ResponseEntity<Long>(cartItemId, HttpStatus.OK);
//   }
   
}
