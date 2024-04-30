package com.shop.back.item.repository;

import java.util.List;

import com.shop.back.category.entity.Category;
import com.shop.back.item.entity.ItemGroup;

public interface ItemGroupRepositoryCustom {
	
	List<ItemGroup> findByCategoryAndDelAndIsView (Long categoryId);
	
}
