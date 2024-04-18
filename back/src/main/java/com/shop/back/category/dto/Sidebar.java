package com.shop.back.category.dto;

import com.shop.back.category.entity.Category;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class Sidebar {
	private Long id;
	private String name;

	public Sidebar(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public static Sidebar of(Category category) {
		return new Sidebar(
			category.getId(),
			category.getName()
		);
	}
}
