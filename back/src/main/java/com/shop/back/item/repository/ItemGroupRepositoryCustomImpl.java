package com.shop.back.item.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.shop.back.category.entity.Category;
import com.shop.back.item.entity.ItemGroup;
import com.shop.back.item.entity.QItem;
import com.shop.back.item.entity.QItemGroup;

import jakarta.persistence.EntityManager;

public class ItemGroupRepositoryCustomImpl implements ItemGroupRepositoryCustom {

	
	private JPAQueryFactory queryFactory;
	
    
    public ItemGroupRepositoryCustomImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

	@Override
	public List<ItemGroup> findByCategoryAndDelAndIsView(Long categoryId) {
		
		QItemGroup itemGroup = QItemGroup.itemGroup;
		
		
		
		return queryFactory
				 .selectFrom(itemGroup)
				 .where(itemGroup.category.id.eq(categoryId)
						 .and(itemGroup.isView.eq(1))
						 .and(itemGroup.del.eq(1)))
				 .fetch();
	}
	
	
	
	
	
	}
	

