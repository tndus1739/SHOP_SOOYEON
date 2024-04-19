package com.shop.back.category.repository;


import com.shop.back.category.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	List<Category> findByParentCategoryAndDelOrderByIdAsc(Category parent, int del);
	List<Category> findByDel(int del);
}
