package com.shop.back;

import com.shop.back.item.dto.ItemFormDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RestController
public class TestController {

	@GetMapping("/test")
	public ResponseEntity<?> test(@RequestParam("test") String test) {
		System.out.println("test : " + test);
		return ResponseEntity.ok("test : " + test);
	}

	@PostMapping("/item/files")
	public ResponseEntity<?> post(
			@RequestParam("file_item") List<MultipartFile> aa,
			@RequestParam("isMain") int index
	) {
		System.out.println("리스트 사이즈 : " + aa.size());
		System.out.println("메인 이미지 index : " + index);
		List<Object> itemImgId = new ArrayList<>();
		for(int i = 0;i<aa.size();i++) {
			itemImgId.add(i+1);
		}

		return ResponseEntity.ok(itemImgId);
	}

	@PostMapping("/item")
	public ResponseEntity<?> post(
			@RequestBody ItemFormDto itemFormDto
			) {
		System.out.println(itemFormDto);
		return ResponseEntity.ok(itemFormDto);
	}
}
