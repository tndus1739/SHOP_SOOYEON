package com.shop.back;

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

	@PostMapping("/test/admin/item/files")
	public ResponseEntity<?> post(
			@RequestParam("file_item") List<MultipartFile> aa
	) {
		System.out.println(aa.size());
		List<Object> id = new ArrayList<>();
		for(int i = 0;i<aa.size();i++) {
			id.add(i+1);
		}

		return ResponseEntity.ok(id);
	}

	@PostMapping("/test/admin/item")
	public ResponseEntity<?> post(
			@RequestBody Map<String, Object> map
	) {
		System.out.println(map);
		return ResponseEntity.ok(map);
	}
}
