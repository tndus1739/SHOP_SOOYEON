package com.shop.back.item.dto;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.web.multipart.MultipartFile;

import com.shop.back.item.entity.File_item;
import com.shop.back.item.entity.Item;
import com.shop.back.item.entity.ItemGroup;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class File_itemDto {


	
	private Long id;

	private int isMain;                     //  (메인 이미지)? 1 : 0
	
	private Long itemGroupId;
	
	private List<MultipartFile> file_item;

	private static ModelMapper modelMapper = new ModelMapper();
	
	// DTO -> Entity
	
	public static File_itemDto entityToDto (File_item file_item) {
	
		return modelMapper.map(file_item, File_itemDto.class);
	


	}
	
//	public static File_itemDto entityToDto (File_item file_item) {
//	File_itemDto file_itemDto = modelMapper.map(file_item, File_itemDto.class);
//	return file_itemDto;
	
	
	
	
	
}
