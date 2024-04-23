package com.shop.back.item.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemDto {

	
	private Long id;

	private String name;

	private String content;

	private String gender;                  //  성별

	private String code;                    //  상품 코드

	private int views;                      //  조회수

	private String status;                  //  판매중 Y or 판매 중지 N

	private int cnt;                        //  수량

	private int price;                      //  가격

	private String isDiscounted;            //  Y : N

//	private double discount;                //  할인율

	private int salePrice;                  //  실제 판매가 (디폴트는 price 의 값 isDiscounted가 Y이면 적용)

	
	
}
