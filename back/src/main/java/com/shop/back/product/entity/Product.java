package com.shop.back.product.entity;

import com.shop.back.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Product extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private String gender;

	private String code;

	private int views;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "size_id")
	private Size size;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "colors_id")
	private Colors colors;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "thumb")
	private File_product thumb;


}
