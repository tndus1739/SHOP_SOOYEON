package com.shop.back;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TestController {

	@GetMapping("/ttt")
	public ResponseEntity<?> test(@RequestParam String test) {
		System.out.println(test);
		return ResponseEntity.ok(test);
	}
}
