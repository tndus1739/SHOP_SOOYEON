package com.shop.back.item.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemGroupDto {

	private Long id;

	private String name;

	private String content;

	private String gender;

	private String sizeTable;

	private int views;

	private String status;

	private int defaultPrice;

	private String isDiscounted;            //  Y : N

	private int salePrice;                  //  실제 판매가 (디폴트는 price 의 값 isDiscounted가 Y이면 적용)

	
}
