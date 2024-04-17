package com.shop.back.category.category;

import com.shop.back.category.entity.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/category")
public class AdminCategoryController {

	@PostMapping
	public ResponseEntity<?> post(@RequestBody Category category) {
		System.out.println(category);
		return ResponseEntity.ok(category);
	}
}
