package com.shop.back.colors.repository;

import com.shop.back.colors.entity.Colors;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColorsRepository extends JpaRepository<Colors, Long> {


	List<Colors> findByDelOrderById(int del);
	
	Colors findByRgbAndDel(String rgb, int del);
}
