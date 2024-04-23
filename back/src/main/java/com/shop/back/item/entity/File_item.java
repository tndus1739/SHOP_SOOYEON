package com.shop.back.item.entity;

import com.shop.back.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Getter
@Entity
public class File_item extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String path;

	private String name;

	private String origin;

	private int isMain;                     //  (메인 이미지)? 1 : 0

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "itemGroup_id")
	private ItemGroup itemGroup;

}
