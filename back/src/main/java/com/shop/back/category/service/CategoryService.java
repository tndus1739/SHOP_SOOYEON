package com.shop.back.category.service;

import com.shop.back.category.dto.CategoryFormDto;
import com.shop.back.category.dto.Sidebar;
import com.shop.back.category.entity.Category;
import com.shop.back.category.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
	private final CategoryRepository categoryRepository;

	public List<Category> getList(Long parentId, int del) {
		Category parent = null;
		if(parentId != null) {
			parent = categoryRepository.findById(parentId).get();
		}
		List<Category> categoryList = categoryRepository.findByParentCategoryAndDelOrderByIdAsc(parent, del);
		return categoryList;
	}

	public void insertCategory(CategoryFormDto category) {
		Category cate = new Category();
		cate.createCate(category);
		if(category.getParentId() == null) {
			categoryRepository.save(cate);
		} else {
			Category parent = categoryRepository.findById(category.getParentId()).get();
			cate.setParentCategory(parent);
			categoryRepository.save(cate);
		}
	}

	public void delete(Long id) {
		Category category = categoryRepository.findById(id).get();
		category.setDel(0);
		category.setDelDate(LocalDateTime.now());
		categoryRepository.save(category);
	}

	public List<Category> getAll() {
		return categoryRepository.findByDel(1);
	}
}
