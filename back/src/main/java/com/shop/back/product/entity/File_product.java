package com.shop.back.product.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class File_product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String path;

	private String name;

	private String origin;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;

}
