package com.shop.back;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

	@PostMapping("/test")
	public ResponseEntity<?> post(
			@RequestParam("file_item") List<MultipartFile> aa,
			@RequestParam Map<String, Object> aa1
	) {
		System.out.println(aa.size());
		System.out.println(aa);
		System.out.println(aa1);

		return ResponseEntity.ok(aa1);
	}
}
