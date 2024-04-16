package com.shop.back.review.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReview is a Querydsl query type for Review
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReview extends EntityPathBase<Review> {

    private static final long serialVersionUID = -488213623L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReview review = new QReview("review");

    public final com.shop.back.common.QBaseEntity _super = new com.shop.back.common.QBaseEntity(this);

    public final StringPath content = createString("content");

    //inherited
    public final NumberPath<Long> createdBy = _super.createdBy;

    //inherited
    public final NumberPath<Long> deleteBy = _super.deleteBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deleteDate = _super.deleteDate;

    public final NumberPath<Integer> grade = createNumber("grade", Integer.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.shop.back.item.entity.QItem item;

    public final com.shop.back.member.entity.QMember member;

    //inherited
    public final NumberPath<Long> modifiedBy = _super.modifiedBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final StringPath title = createString("title");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateDate = _super.updateDate;

    public QReview(String variable) {
        this(Review.class, forVariable(variable), INITS);
    }

    public QReview(Path<? extends Review> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReview(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReview(PathMetadata metadata, PathInits inits) {
        this(Review.class, metadata, inits);
    }

    public QReview(Class<? extends Review> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.item = inits.isInitialized("item") ? new com.shop.back.item.entity.QItem(forProperty("item"), inits.get("item")) : null;
        this.member = inits.isInitialized("member") ? new com.shop.back.member.entity.QMember(forProperty("member")) : null;
    }

}

