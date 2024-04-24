package com.shop.back.item.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shop.back.item.dto.ItemDto;
import com.shop.back.item.dto.ItemFormDto;
import com.shop.back.item.dto.ItemGroupDto;
import com.shop.back.item.entity.Item;
import com.shop.back.item.repository.ItemRepository;
import com.shop.back.item.service.ItemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/item")
//@CrossOrigin("*")  //모든 도메인, 모든 요청방식' 에 대해 허용
@RequiredArgsConstructor
public class ItemController {

	 @Autowired
	    private final ItemService itemService;
	 	private final ItemRepository itemRepository;
	 	
	 	// 상품 전체 리스트 조회 
	    @GetMapping
	    public List<Item> getAllItems() {
	    	List<Item> itemList = itemService.getItemList();
	    	System.out.println("상품리스트 조회성공");
	        return itemService.getItemList();
	    }
	    
	    // 상품 상세 정보
	    @GetMapping("/{id}")
	    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
	        Item item = itemService.getItemById(id);
	        return new ResponseEntity<>(item, HttpStatus.OK);
	    }
	    
	 // 상품 등록
	    @PostMapping
		public ResponseEntity<?> post(
				@RequestBody ItemFormDto itemFormDto 
				
		) {
	    	
	    
	    	List<ItemDto> itemList = itemFormDto.getItemDtoList();
	    	  
	    	
	    	System.out.println("List 에서 끄집어내서 출력 : " + itemList.get(0));
	    	
	    	
	    	ItemGroupDto itemGroupDto = new ItemGroupDto();

		    System.out.println("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
//			System.out.println(itemFormDto);
			 try {
				 
				 itemService.saveItem (itemFormDto, itemGroupDto);
				 
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
			return ResponseEntity.ok(itemFormDto);
		}
	    
	    // 상품 이미지 
		@PostMapping("/files")
		public ResponseEntity<?> post(
				@RequestParam("file_item") List<MultipartFile> itemImgFileList,
				@RequestParam("isMain") int index,
				@RequestParam("itemGroupId") Long itemGroupId
		) {
			System.out.println("리스트 사이즈 : " + itemImgFileList.size());
			System.out.println("메인 이미지 index : " + index);
			System.out.println("아이템 그룹 Id : " + itemGroupId);

			return ResponseEntity.ok(itemGroupId);
		}
	    
	    
	    
	    
	    // 상품 수정 
	    @PutMapping("/{id}")
	    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item updatedItem) {
	        Item updated = itemService.updateItem(id, updatedItem);
	        return new ResponseEntity<>(updated, HttpStatus.OK);
	    }
	    
	    // 상품 삭제
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
	        itemService.deleteItem(id);
	        return ResponseEntity.noContent().build();
	    }
}
