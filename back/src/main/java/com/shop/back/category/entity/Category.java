package com.shop.back.category.entity;

import com.shop.back.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Category extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parentId")
	private Category parentCategory;
}
