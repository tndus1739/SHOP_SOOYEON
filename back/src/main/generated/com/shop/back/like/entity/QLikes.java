package com.shop.back.like.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QLikes is a Querydsl query type for Likes
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLikes extends EntityPathBase<Likes> {

    private static final long serialVersionUID = -1031060340L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QLikes likes = new QLikes("likes");

    public final com.shop.back.common.QBaseEntity _super = new com.shop.back.common.QBaseEntity(this);

    //inherited
    public final NumberPath<Long> createdBy = _super.createdBy;

    //inherited
    public final NumberPath<Long> deleteBy = _super.deleteBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deleteDate = _super.deleteDate;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.shop.back.item.entity.QItem item;

    public final com.shop.back.member.entity.QMember member;

    //inherited
    public final NumberPath<Long> modifiedBy = _super.modifiedBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateDate = _super.updateDate;

    public QLikes(String variable) {
        this(Likes.class, forVariable(variable), INITS);
    }

    public QLikes(Path<? extends Likes> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QLikes(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QLikes(PathMetadata metadata, PathInits inits) {
        this(Likes.class, metadata, inits);
    }

    public QLikes(Class<? extends Likes> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.item = inits.isInitialized("item") ? new com.shop.back.item.entity.QItem(forProperty("item"), inits.get("item")) : null;
        this.member = inits.isInitialized("member") ? new com.shop.back.member.entity.QMember(forProperty("member")) : null;
    }

}

