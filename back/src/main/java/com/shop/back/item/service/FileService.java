package com.shop.back.item.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j  // log
public class FileService {
	
	// 파일
	
	public String uploadFile (String path , String origin , byte[] fileData) 
			
			throws IOException {
		
    //  UUID : 중복되지 않는 ID 생성
		UUID uuid = UUID.randomUUID();  
		String extension = origin.substring(origin.lastIndexOf("."));
		String savedFileName = uuid.toString() + extension;
		String fileUPloadFullUrl = path + "/" + savedFileName;
		
		FileOutputStream fos = new FileOutputStream(fileUPloadFullUrl);
			
		fos.write(fileData);
		fos.close();
		
		return savedFileName;
	}
	
	// 파일삭제
	
	 public void deleteFile (String path) {
		 
		 File deleteFile = new File(path);
		 
		 if (deleteFile.exists()) {
			 
			 deleteFile.delete();
			 log.info("파일을 삭제했습니다.");
			 
		 } else {
			 
			 log.info("파일이 존재하지 않습니다.");
		 }
	 }
	
}
