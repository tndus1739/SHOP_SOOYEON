package com.shop.back.item.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shop.back.item.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> ,QuerydslPredicateExecutor<Item> {

	List<Item> findByName(String name);

	List<Item> findByNameOrContent(String name, String content);
	
	// 상품가격 내림차순 정렬
	List<Item> findByPriceLessThanOrderByPriceDesc(int price);
	
	// JPQL [관점 : Entity]
	@Query("select i from Item i where i.content like %:content% order by i.price desc")
	List<Item> findbyItemContent (@Param("content") String content);
	
	//Native [관점 : 테이블]
	@Query(value = "select * from Item i where i.content like %:content% order by i.price asc" , nativeQuery = true)
	List<Item> findbyItemContentNative (@Param("content") String content);
	
	
}
