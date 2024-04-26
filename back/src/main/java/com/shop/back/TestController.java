package com.shop.back;

import com.shop.back.item.dto.ItemFormDto;
import com.shop.back.item.entity.ItemGroup;
import com.shop.back.member.dto.request.JoinRequest;
import com.shop.back.member.dto.response.JoinResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@RestController
public class TestController {

//	@GetMapping("/test")
//	public ResponseEntity<?> test(@RequestParam("test") String test) {
//		System.out.println("test : " + test);
//		return ResponseEntity.ok("test : " + test);
//	}

//	@PostMapping("/item")
//	public ResponseEntity<?> post(
//			@RequestBody ItemFormDto itemFormDto
//	) {
//		System.out.println(itemFormDto);
//		ItemGroup itemGroup = new ItemGroup();
//		itemGroup.setId(1L);
//		return ResponseEntity.ok(itemGroup);
//	}
//
//	@PostMapping("/item/files")
//	public ResponseEntity<?> post(
//			@RequestParam("file_item") List<MultipartFile> aa,
//			@RequestParam("isMain") int index,
//			@RequestParam("itemGroupId") Long itemGroupId
//	) {
//		System.out.println("리스트 사이즈 : " + aa.size());
//		System.out.println("메인 이미지 index : " + index);
//		System.out.println("아이템 그룹 Id : " + itemGroupId);
//
//		return ResponseEntity.ok(itemGroupId);
//	}

	//회원가입
//	@PostMapping("/member/join/test")
//	public ResponseEntity<?> join(@RequestBody JoinRequest req) {
//		System.out.println("MemberController join " + new Date());
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//		LocalDate localDate = LocalDate.parse(req.getBirthString(), formatter);
//
//		LocalDateTime localDateTime = localDate.atTime(LocalTime.MIDNIGHT);
//		req.setBirth(localDateTime);
//
//		return ResponseEntity.ok(req);
//	}
}
