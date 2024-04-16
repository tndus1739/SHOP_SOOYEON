package com.shop.back;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class TestController {

	@GetMapping("/test")
	public ResponseEntity<?> test(@RequestParam("test") String test) {
		System.out.println("test : " + test);
		return ResponseEntity.ok("test : " + test);
	}
}
