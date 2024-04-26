package com.shop.back.item.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.util.StringUtils;

import com.shop.back.item.dto.File_itemDto;
import com.shop.back.item.dto.ItemFormDto;
import com.shop.back.item.entity.File_item;
import com.shop.back.item.entity.Item;
import com.shop.back.item.entity.ItemGroup;
import com.shop.back.item.repository.File_itemRepository;
import com.shop.back.item.repository.ItemGroupRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class File_itemService {
	
	

	@Value("${itemImgLocation}")
	private String itemImgLocation;	    // C:/shop/item 
	
	private final File_itemRepository file_itemRepository;
	private final FileService fileService;
	private final ItemGroupRepository itemGroupRepository;
	
	public void saveItemImage ( File_item file_item , MultipartFile itemImgFile) throws IOException {
		
		// oriImgName : MultipartFile에서 넘어오는 원본이미지 이름을 
        String originImgName = itemImgFile.getOriginalFilename();		// 원본 이미지 파일 이름 
        String imgName = "";										    // 서버에 저장할 이미지 이름 
        String imgUrl = "";											    // 이미지 URL
        
        // 내용있는 경우
        if (!StringUtils.isEmpty(originImgName)) {
        	imgName = fileService.uploadFile(itemImgLocation, originImgName, itemImgFile.getBytes());
        	imgUrl = "/images/item/" + imgName;
        }
        
        // 상품 이미지 정보 저장
        file_item.updateItemImg(imgName, imgUrl, originImgName);
        file_itemRepository.save(file_item);
        

	}
	
	
	// 이미지 등록
	public Long saveItemImg(List<MultipartFile> file_item, int index, Long itemGroupId ) throws IOException {
        
		
		ItemGroup itemGroup = itemGroupRepository.findById(itemGroupId).get();
		
        for (int i = 0; i < file_item.size(); i++) {
        	
           MultipartFile file = file_item.get(i); 
           File_item fileItem = new File_item();
           fileItem.setItemGroup(itemGroup);
           
           // 대표 이미지 설정
            if (i == index) {
                fileItem.setIsMain(1);  // 대표이미지
            
            } else {
                fileItem.setIsMain(0);  
            }

            saveItemImage(fileItem , file);

        }
        return  itemGroupId;
    }


	

	

	
}
