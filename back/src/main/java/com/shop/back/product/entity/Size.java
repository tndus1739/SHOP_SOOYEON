package com.shop.back.product.entity;


import com.shop.back.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "product_size")
public class Size {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String sizeJson;

	private String sizeType;
}
