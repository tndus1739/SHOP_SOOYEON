package com.shop.back.item.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.shop.back.category.entity.Category;
import com.shop.back.category.repository.CategoryRepository;
import com.shop.back.colors.entity.Colors;
import com.shop.back.colors.repository.ColorsRepository;
import com.shop.back.item.dto.ItemDto;
import com.shop.back.item.dto.ItemFormDto;
import com.shop.back.item.dto.ItemGroupDto;
import com.shop.back.item.entity.File_item;
import com.shop.back.item.entity.Item;
import com.shop.back.item.entity.ItemGroup;
import com.shop.back.item.repository.File_itemRepository;
import com.shop.back.item.repository.ItemGroupRepository;
import com.shop.back.item.repository.ItemRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemService {

	
	private final ItemRepository itemRepository;
	private final File_itemService file_itemService;
	private final File_itemRepository file_itemRepository;
	private final ItemGroupRepository itemGroupRepository;
	private final CategoryRepository categoryRepository;
	private final ColorsRepository colorsRepository;
	
	
	// 상품리스트
	public List<Item> getItemList() {
		return itemRepository.findAll();
	}
	
	// 상품상세보기
	public Item getItemById (Long id) {
		return itemRepository.findById(id)
									.orElseThrow(() -> new RuntimeException("상품을 찾을 수 없습니다 : " + id));
	}
	
	// 상품 등록
	@Transactional
	public ItemGroup saveItem (ItemFormDto itemFormDto ) throws IOException{
		
		
		
		ItemGroup itemGroup = new ItemGroup();    // createItem() : Dto -> Entity
		Category category = categoryRepository.findById(itemFormDto.getCategoryId()).get();
		
//		Colors colors = colorsRepository.findByRgbAndDel(itemFormDto.getItemDtoList().get(0).getRgb(), 1);
		
		itemGroup.saveItemGroup(itemFormDto);
		itemGroup.setCategory(category);
		
		
		System.out.println("상품등록성공");
		System.out.println("RGB 출력 : " + itemFormDto.getItemDtoList().get(0).getRgb());


		System.out.println(itemFormDto);
		
		
		ItemGroup itemGroup2 = itemGroupRepository.save(itemGroup);
		
		 for (ItemDto itemDto : itemFormDto.getItemDtoList()) {
			 
			 Colors colors = colorsRepository.findByRgbAndDel(itemDto.getRgb(), 1);
			 
			 Item item = itemDto.createItem();
			 item.setItemGroup(itemGroup2);
			 item.setColors(colors);
			 itemRepository.save(item);
		 }
		
	
			return itemGroup2;
	}
	
	// 시퀀스를 사용하여 ID 생성
    private Long generateIdItem() {
        return itemRepository.getNextItemId();
    }

	
	// Form에서 이미지가 있는 경우와 없는 경우를 처리하는 메소드
	public void  isThisImg (ItemFormDto itemFormDto) {
		
	    if ( !itemFormDto.getItemImgId().isEmpty()) {
	        // 이미지가 존재하는 경우 새로운 ID 생성 (예시 로직)
	        itemFormDto.setId(generateIdItem());
	    } else {
	        // 이미지가 없는 경우 ID를 null로 설정
	        itemFormDto.setId(null);
	    }
	    
	 
	}
	
	
	
	

	// 상품수정하기
	public Item updateItem (Long id , Item updateItem) {
		Item item = getItemById(id);
		return itemRepository.save(item);
	}
	// 상품삭제하기
	public void deleteItem (long id) {
		Item item = getItemById(id);
		itemRepository.delete(item);
	}
}
