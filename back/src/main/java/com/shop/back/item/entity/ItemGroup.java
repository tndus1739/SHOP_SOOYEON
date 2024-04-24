package com.shop.back.item.entity;

import com.shop.back.category.entity.Category;
import com.shop.back.item.dto.ItemFormDto;
import com.shop.back.member.entity.Member;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class ItemGroup {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private String content;

	private String gender;

	private String sizeTable;

	private int views;          //  조회수

	private String status;

	private int defaultPrice;

	private int isDiscounted;            //  1 : 0

	private int salePrice;                  //  실제 판매가 (디폴트는 price 의 값 isDiscounted가 Y이면 적용)

	private int del;            // 기본: 1, 삭제됨: 0

	private LocalDateTime delDate;

	private int isView;         //  노출 여부 1 : 0

	@ManyToOne(fetch = FetchType.LAZY)      //  카테고리
	@JoinColumn(name = "category_id")
	private Category category;

	@ManyToOne(fetch = FetchType.LAZY)      //  관리자
	@JoinColumn(name = "member_id")
	private Member member;

	@OneToMany(fetch = FetchType.LAZY)
	private List<File_item> images;
	
	public void saveItemGroup(ItemFormDto form) {
    	this.name = form.getItemName();
    	this.content = form.getContent();
    	this.gender = form.getGender();
    	this.salePrice = form.getSalePrice();
    	this.del = 1;
    	this.sizeTable = form.getSizeTable();
    	this.defaultPrice = form.getDefaultPrice();
    	this.isDiscounted = form.getIsDiscounted();
    	this.status = form.getStatus();
    	this.isView = form.getIsView();
    	this.views = 0;
    }
}
