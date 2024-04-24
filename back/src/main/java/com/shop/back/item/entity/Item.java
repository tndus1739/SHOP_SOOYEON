package com.shop.back.item.entity;

import com.shop.back.category.entity.Category;
import com.shop.back.colors.entity.Colors;
import com.shop.back.common.BaseEntity;
import com.shop.back.member.entity.Member;
import com.shop.back.size.entity.Size;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@Table(name = "Item")
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private int views;                      //  조회수

	private String status;                  //  판매중 Y or 판매 중지 N or 품절

	private int cnt;                        //  수량

	private int optionPrice;                //  옵션가

	private int originPrice;

	private int total;                      //  가격 + 옵션가

	private int del;            // 기본: 1, 삭제됨: 0

	private LocalDateTime delDate;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "colors_id")
	private Colors colors;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "itemGroup_id")
	private ItemGroup ItemGroup;


}
