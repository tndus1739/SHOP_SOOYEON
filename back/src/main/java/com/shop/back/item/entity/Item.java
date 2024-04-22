package com.shop.back.item.entity;

import com.shop.back.category.entity.Category;
import com.shop.back.colors.entity.Colors;
import com.shop.back.common.BaseEntity;
import com.shop.back.member.entity.Member;
import com.shop.back.size.entity.Size;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "Item")
@Entity
public class Item extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private int views;                      //  조회수

	private String status;                  //  판매중 Y or 판매 중지 N or 품절

	private int cnt;                        //  수량

	private int optionPrice;                      //  옵션가

	private int total;                      //  가격 + 옵션가

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "colors_id")
	private Colors colors;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "itemGroup_id")
	private ItemGroup Item;


}
