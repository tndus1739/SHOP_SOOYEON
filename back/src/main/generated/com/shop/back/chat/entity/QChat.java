package com.shop.back.chat.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QChat is a Querydsl query type for Chat
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QChat extends EntityPathBase<Chat> {

    private static final long serialVersionUID = 1214415561L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QChat chat = new QChat("chat");

    public final com.shop.back.common.QBaseEntity _super = new com.shop.back.common.QBaseEntity(this);

    public final QChatRoom chatRoom;

    public final StringPath content = createString("content");

    //inherited
    public final NumberPath<Long> createdBy = _super.createdBy;

    //inherited
    public final NumberPath<Long> deleteBy = _super.deleteBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deleteDate = _super.deleteDate;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath isView = createString("isView");

    public final com.shop.back.item.entity.QItem item;

    //inherited
    public final NumberPath<Long> modifiedBy = _super.modifiedBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final StringPath type = createString("type");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateDate = _super.updateDate;

    public QChat(String variable) {
        this(Chat.class, forVariable(variable), INITS);
    }

    public QChat(Path<? extends Chat> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QChat(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QChat(PathMetadata metadata, PathInits inits) {
        this(Chat.class, metadata, inits);
    }

    public QChat(Class<? extends Chat> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.chatRoom = inits.isInitialized("chatRoom") ? new QChatRoom(forProperty("chatRoom"), inits.get("chatRoom")) : null;
        this.item = inits.isInitialized("item") ? new com.shop.back.item.entity.QItem(forProperty("item"), inits.get("item")) : null;
    }

}

