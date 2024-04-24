package com.shop.back.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	
	@Value("${uploadPath}")             //application.properties 파일의 변수를 로딩 
    private String uploadPath;			//uploadPath = file:///C:/shop/
	
	 @Override
	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
	        registry.addResourceHandler("/images/**")		// 서버에서 처리되는 경로 
	                .addResourceLocations(uploadPath);		//실제 이미지가 저장되는 물리적 경로
	    }
}
