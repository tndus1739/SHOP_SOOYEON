package com.shop.back.item.dto;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;

import com.shop.back.category.entity.Category;
import com.shop.back.colors.entity.Colors;
import com.shop.back.item.entity.Item;
import com.shop.back.size.entity.Size;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class ItemFormDto {
	
	
	private Long id;
	
	@NotBlank(message = "상품명을 입력해주세요.")
	private String item_name;
	
	@NotBlank(message = "상품설명을 입력해주세요.")
	private String content;

	private String gender;                  //  성별

//	private String code;                    //  상품 코드

//	private int views;                      //  조회수

	private String status;                  //  판매중 Y or 판매 중지 N
	
	@NotNull (message = "수량을 입력해주세요.")
	private int cnt;                        //  수량

	@NotNull (message = "가격을 입력해주세요.")
	private int price;                      //  가격

	private String isDiscounted;            //  Y : N

//	private double discount;                //  할인율

	private int defaultPrice;
	
	private int salePrice;                  //  실제 판매가 (디폴트는 price 의 값 isDiscounted가 Y이면 적용)
	
//	private Category category;              //  id값
	private Long categoryId;
	
	private String sizeTable;

	
//	private Colors colors;                  //  rgb값

	private String rgb;
	
	
	
//	private List<File_itemDto> itemImgDtoList = new ArrayList<>();;
	
	
	private List<Long> itemImgId = new ArrayList<>();

	private List<ItemDto> itemDtoList = new ArrayList<>();
	
	
	private static ModelMapper modelMapper = new ModelMapper();
	
	// Dto -> Entity
	
	public Item createItem () {
	
		return modelMapper.map(this, Item.class);
	}
	
	public static ItemFormDto entityToDto (Item item) {
		return modelMapper.map(item , ItemFormDto.class);
	}
	
}
