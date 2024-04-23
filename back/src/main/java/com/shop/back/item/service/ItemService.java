package com.shop.back.item.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.shop.back.item.dto.ItemDto;
import com.shop.back.item.dto.ItemFormDto;
import com.shop.back.item.entity.File_item;
import com.shop.back.item.entity.Item;
import com.shop.back.item.repository.File_itemRepository;
import com.shop.back.item.repository.ItemRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemService {

	
	private final ItemRepository itemRepository;
	private final File_itemService file_itemService;
	private final File_itemRepository file_itemRepository;
	
	// 상품리스트
	public List<Item> getItemList() {
		return itemRepository.findAll();
	}
	
	// 상품상세보기
	public Item getItemById (Long id) {
		return itemRepository.findById(id)
									.orElseThrow(() -> new RuntimeException("상품을 찾을 수 없습니다 : " + id));
	}
	
	
	
	public Long saveItem (ItemFormDto itemFormDto , List<MultipartFile> itemImgFileList) 
			throws IOException{
		
		
		// 상품 등록
		Item item = itemFormDto.createItem();    // createItem() : Dto -> Entity
//		System.out.println("상품등록성공");
		itemRepository.save(item);
		
		// 이미지 등록
		for (int i = 0; i < itemImgFileList.size(); i++) {
			File_item file_item = new File_item();
//			file_item.setItemGroup(item);
			
			if(i==0) {
				file_item.setIsMain(1);
			} else {
				file_item.setIsMain(0);
			}
			
			file_itemService.saveItemImg(file_item, itemImgFileList.get(i));
		}
			return item.getId();
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
