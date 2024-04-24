package com.shop.back.itemTest;

import java.time.LocalDateTime;
import java.util.List;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.fasterxml.jackson.core.sym.Name;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.util.StringUtils;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.shop.back.item.entity.Item;
import com.shop.back.item.entity.QItem;
import com.shop.back.item.repository.ItemRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@SpringBootTest
public class ItemRepositoryTest {

	@Autowired
	private ItemRepository itemRepository;
	
	@PersistenceContext  // = @Autowired
	private EntityManager em; // em : EntityManager [@PersistenceContext : new 없이도 사용가능]
	
	public void createItemList () {
		for (int i = 1; i <= 5 ;  i++ ) {
			Item i1 = new Item();
			
			i1.setName("바지"+i);
//			i1.setPrice(79000+i);
//			i1.setGender("m");
//			i1.setContent("바지상세정보" + i);
			i1.setRegDate(LocalDateTime.now());
			i1.setUpdateDate(LocalDateTime.now());
			i1.setStatus("y");
			i1.setCnt(300);
			
			itemRepository.save(i1);
			
		}
	}
	
	public void createItemList2 () {
		for (int i = 1; i <= 5 ;  i++ ) {
			Item i1 = new Item();
			i1.setName("셔츠"+i);
//			i1.setPrice(79000+i);
//			i1.setGender("m");
//			i1.setContent("셔츠상세정보" + i);
			i1.setRegDate(LocalDateTime.now());
			i1.setUpdateDate(LocalDateTime.now());
			i1.setStatus("Y");
			i1.setCnt(250);
			
			itemRepository.save(i1);
			
		}
		
		for (int i = 5; i <= 10 ;  i++ ) {
			Item i1 = new Item();
			i1.setName("자켓"+i);
//			i1.setPrice(50000+i);
//			i1.setGender("w");
//			i1.setContent("자켓상세정보" + i);
			i1.setRegDate(LocalDateTime.now());
			i1.setUpdateDate(LocalDateTime.now());
			i1.setStatus("N");
			i1.setCnt(100);
			
			itemRepository.save(i1);
			
		}
	}
	
	
//	@Test
	@DisplayName("상품명 검색 테스트")
	public void findByNameTest () {
		createItemList();
		
		itemRepository
		          .findByName("바지2") 
				  .forEach((item) -> {
				     System.out.println(item);
		          });   // 람다표기법
	}
	
	
//	@Test
	@DisplayName("상품등록 테스트")
	public void createItemTest() {
		Item i2 = new Item();
		i2.setName("블라우스");
//		i2.setPrice(100000);
//		i2.setGender("w");
//		i2.setContent("블라우스 상세 정보");
		i2.setRegDate(LocalDateTime.now());
		i2.setUpdateDate(LocalDateTime.now());
		i2.setStatus("y");
		i2.setCnt(500);
		
		System.out.println("=========== i2: " + i2);
		itemRepository.save(i2);
	}
	
//	@Test
//	@DisplayName("OR 테스트")
//	public void findByNameOrContentTest() {
//	List<Item> itemList = itemRepository.findByNameOrContent("바지2", "바지상세정보10");
//	itemList.forEach((item) -> {
//		System.out.println(item);
//	});
//	}
	
	// 상품가격 내림차순 정렬
////	@Test
//	@DisplayName("Order by 테스트")
//	public void findByPriceLessThanOrderByPriceDesc () {
//	itemRepository.findByPriceLessThanOrderByPriceDesc(100000)
//			.forEach((item -> System.out.println(item)));
//	}
//
////	@Test
//	@DisplayName("JPQL 테스트")
//	public void findbyItemContent () {
//		itemRepository.findbyItemContent("1")
//			.forEach((item) -> {
//				System.out.println(item);
//			});
//	}
//
//
////	@Test
//	@DisplayName("Native 테스트")
//	public void findbyItemContentNative () {
//		itemRepository.findbyItemContentNative("1")
//			.forEach((item) -> {
//				System.out.println(item);
//			});
//	}
	
//	@Test
	@DisplayName("QueryDSL 테스트")
	public void querydslTest () {
		JPAQueryFactory query = new JPAQueryFactory(em);
		QItem qItem = QItem.item;
		
//		List<Item> itemList = query.selectFrom(QItem.item)
//				.where(QItem.item.content.like("%"+ "7" +"%"))
//				.orderBy(QItem.item.price.desc())
//				.fetch();
		
//		itemList.forEach((item -> System.out.println(item)));
	}
	
	
	
	
//	@Test
	@DisplayName("QueryDSL 테스트2")
	public void querydslTest2  () {
		createItemList2 ();
//		Item item1 = new Item();
		
		BooleanBuilder builder = new BooleanBuilder();
		String content = "셔츠";
		int price = 50000;
		String status = "N";
//		
//		for (int i = 5; i <= 10 ;  i++ ) {
//			Item i1 = new Item();
//			i1.setName("자켓"+i);
////			i1.setPrice(50000+i);
////			i1.setGender("w");
////			i1.setContent("자켓상세정보" + i);
//			i1.setRegDate(LocalDateTime.now());
//			i1.setUpdateDate(LocalDateTime.now());
//			i1.setStatus("N");
//			i1.setCnt(100);
//			
//			itemRepository.save(i1);
//			
		}
	}
	
//	
////	@Test
//	@DisplayName("상품명 검색 테스트")
//	public void findByNameTest () {
//		createItemList();
//		
//		itemRepository
//		          .findByName("바지2") 
//				  .forEach((item) -> {
//				     System.out.println(item);
//		          });   // 람다표기법
//	}
//	
//	
////	@Test
//	@DisplayName("상품등록 테스트")
//	public void createItemTest() {
//		Item i2 = new Item();
//		i2.setName("블라우스");
////		i2.setPrice(100000);
////		i2.setGender("w");
////		i2.setContent("블라우스 상세 정보");
//		i2.setRegDate(LocalDateTime.now());
//		i2.setUpdateDate(LocalDateTime.now());
//		i2.setStatus("y");
//		i2.setCnt(500);
//		
//		System.out.println("=========== i2: " + i2);
//		itemRepository.save(i2);
//	}
//	
////	@Test
//	@DisplayName("OR 테스트")
//	public void findByNameOrContentTest() {
//	List<Item> itemList = itemRepository.findByNameOrContent("바지2", "바지상세정보10");
//	itemList.forEach((item) -> {
//		System.out.println(item);
//	});      
//	}
//	
//	// 상품가격 내림차순 정렬
////	@Test
//	@DisplayName("Order by 테스트")
//	public void findByPriceLessThanOrderByPriceDesc () {
//	itemRepository.findByPriceLessThanOrderByPriceDesc(100000)
//			.forEach((item -> System.out.println(item)));
//	}
//	
////	@Test
//	@DisplayName("JPQL 테스트")
//	public void findbyItemContent () {
//		itemRepository.findbyItemContent("1")
//			.forEach((item) -> {
//				System.out.println(item);
//			});
//	}
//	
//	
////	@Test
//	@DisplayName("Native 테스트")
//	public void findbyItemContentNative () {
//		itemRepository.findbyItemContentNative("1")
//			.forEach((item) -> {
//				System.out.println(item);
//			});
//	}
//	
////	@Test
//	@DisplayName("QueryDSL 테스트")
//	public void querydslTest () {
//		JPAQueryFactory query = new JPAQueryFactory(em);
//		QItem qItem = QItem.item;
//		
////		List<Item> itemList = query.selectFrom(QItem.item)
////				.where(QItem.item.content.like("%"+ "7" +"%"))
////				.orderBy(QItem.item.price.desc())
////				.fetch();
//		
////		itemList.forEach((item -> System.out.println(item)));
//	}
//	
//	
//	
//	
////	@Test
//	@DisplayName("QueryDSL 테스트2")
//	public void querydslTest2  () {
//		createItemList2 ();
////		Item item1 = new Item();
//		
//		BooleanBuilder builder = new BooleanBuilder();
//		String content = "셔츠";
//		int price = 50000;
//		String status = "N";
//		
////		QItem item = QItem.item;
////		builder.and(item.status.eq("N"));
////		builder.and(item.content.like("%"+ content + "%"));
////		builder.and(item.price.gt(price));  // 초과
//		
////		if(status.equals(item1.getStatus())) {
////			builder.and(item.status.eq(item1.getStatus()));
////		
////		
////		}
//		
//		Pageable pageable = PageRequest.of(0, 5);
//		
//		Page<Item> page = itemRepository.findAll(builder,pageable);
//		List<Item> content3 = page.getContent();
//		content3.stream().forEach((e) -> {
//			System.out.println(e);
//		});
//		
//	}
//}
