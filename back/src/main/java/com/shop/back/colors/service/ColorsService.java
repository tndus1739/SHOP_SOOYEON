package com.shop.back.colors.service;

import com.shop.back.colors.entity.Colors;
import com.shop.back.colors.repository.ColorsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ColorsService {
	private final ColorsRepository colorsRepository;

	public void post(Colors color) {
		color.setDel(1);
		colorsRepository.save(color);
	}

	public List<Colors> getList() {
		return colorsRepository.findByDelOrderById(1);
	}
}
