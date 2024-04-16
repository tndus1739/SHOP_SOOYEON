package com.shop.back.common;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(value = {AuditingEntityListener.class})
@MappedSuperclass        // 부모의 Entity 클래스로 선언
@Getter
public abstract class BaseEntity extends BaseTimeEntity {

	@CreatedBy
	@Column(updatable = false)
	private Long createdBy;

	@LastModifiedBy
	private Long modifiedBy;

	private Long deleteBy;

	private int del;            // 기본: 1, 삭제됨: 0
}
