package com.shop.back.colors.controller;

import com.shop.back.colors.entity.Colors;
import com.shop.back.colors.service.ColorsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/colors")
public class ColorsController {
	private final ColorsService colorsService;

	@PostMapping
	public ResponseEntity<?> post(@RequestBody Colors colors) {
		colorsService.post(colors);
		return ResponseEntity.ok(colors);
	}

	@GetMapping
	public ResponseEntity<?> getList() {
		List<Colors> list = new ArrayList<>();
		try {
			list = colorsService.getList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(list);
	}
}
