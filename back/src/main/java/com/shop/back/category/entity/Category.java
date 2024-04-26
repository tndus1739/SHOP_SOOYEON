package com.shop.back.category.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.shop.back.category.dto.CategoryFormDto;
import com.shop.back.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
//@Data
@Setter
@Getter
public class Category extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private int depth;

	private String deleteBy;

	private int del;            // 기본: 1, 삭제됨: 0

	private LocalDateTime delDate;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parentId")
	@JsonIgnore
	private Category parentCategory;

	@OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "parentId")
	private List<Category> childCategories;

	public void createCate(CategoryFormDto cc) {
		this.name = cc.getName();
		this.del = cc.getDel();
		this.delDate = cc.getDelDate();
		this.depth = cc.getDepth();
	}

	@Override
	public String toString() {
		return "Category{" +
				"id=" + id +
				", name='" + name + '\'' +
				", depth=" + depth +
				", deleteBy='" + deleteBy + '\'' +
				", del=" + del +
				", delDate=" + delDate +
				'}';
	}
}
