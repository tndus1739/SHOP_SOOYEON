package com.shop.back.item.repository;

import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

import com.shop.back.item.entity.File_item;

public interface File_itemRepository extends JpaRepository <File_item, Long>{

}
