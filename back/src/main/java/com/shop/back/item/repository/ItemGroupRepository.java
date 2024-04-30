package com.shop.back.item.repository;

import com.shop.back.category.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import com.shop.back.item.entity.ItemGroup;

import java.util.List;

public interface ItemGroupRepository extends JpaRepository<ItemGroup, Long> ,ItemGroupRepositoryCustom{
 
	List<ItemGroup> findByCategory(Category category);

	List<ItemGroup> findByCategoryAndDelAndIsView(Long categoryId);
}
