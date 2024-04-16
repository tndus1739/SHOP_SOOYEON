package com.shop.back.chat.entity;

import com.shop.back.item.entity.Item;
import com.shop.back.member.entity.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ChatRoom {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String title;

	private String content;

	private String type;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "item_id")
	private Item item;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rec_id")
	private Member recipient;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "send_id")
	private Member sender;

}
