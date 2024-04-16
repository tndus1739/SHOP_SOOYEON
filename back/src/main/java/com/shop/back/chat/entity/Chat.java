package com.shop.back.chat.entity;

import com.shop.back.common.BaseEntity;
import com.shop.back.item.entity.Item;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Chat extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String content;

	private String type;

	private String isView;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "item_id")
	private Item item;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "chatroom_id")
	private ChatRoom chatRoom;
}
