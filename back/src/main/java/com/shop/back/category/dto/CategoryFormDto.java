package com.shop.back.category.dto;

import com.shop.back.category.entity.Category;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

@Data
public class CategoryFormDto {
	private Long id;
	private String name;
	private int depth;
	private Long parentId;
	private int del = 1;
	private LocalDateTime delDate;
}
