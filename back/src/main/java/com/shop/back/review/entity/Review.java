package com.shop.back.review.entity;

import com.shop.back.common.BaseEntity;
import com.shop.back.item.entity.Item;
import com.shop.back.item.entity.ItemGroup;
import com.shop.back.member.entity.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Review extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String title;

	private String content;

	private int grade;              //  별점

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "itemGroup_id")
	private ItemGroup itemGroup;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id")
	private Member member;

}
