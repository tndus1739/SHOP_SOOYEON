package com.shop.back.item.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QItem is a Querydsl query type for Item
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItem extends EntityPathBase<Item> {

    private static final long serialVersionUID = -906260033L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QItem item = new QItem("item");

    public final com.shop.back.common.QBaseEntity _super = new com.shop.back.common.QBaseEntity(this);

    public final com.shop.back.category.entity.QCategory category;

    public final NumberPath<Integer> cnt = createNumber("cnt", Integer.class);

    public final StringPath code = createString("code");

    public final com.shop.back.colors.entity.QColors colors;

    public final StringPath content = createString("content");

    //inherited
    public final NumberPath<Long> createdBy = _super.createdBy;

    //inherited
    public final NumberPath<Long> deleteBy = _super.deleteBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deleteDate = _super.deleteDate;

    public final StringPath gender = createString("gender");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath isDiscounted = createString("isDiscounted");

    //inherited
    public final NumberPath<Long> modifiedBy = _super.modifiedBy;

    public final StringPath name = createString("name");

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final NumberPath<Integer> salePrice = createNumber("salePrice", Integer.class);

    public final com.shop.back.size.entity.QSize size;

    public final StringPath status = createString("status");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateDate = _super.updateDate;

    public final NumberPath<Integer> views = createNumber("views", Integer.class);

    public QItem(String variable) {
        this(Item.class, forVariable(variable), INITS);
    }

    public QItem(Path<? extends Item> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QItem(PathMetadata metadata, PathInits inits) {
        this(Item.class, metadata, inits);
    }

    public QItem(Class<? extends Item> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new com.shop.back.category.entity.QCategory(forProperty("category"), inits.get("category")) : null;
        this.colors = inits.isInitialized("colors") ? new com.shop.back.colors.entity.QColors(forProperty("colors")) : null;
        this.size = inits.isInitialized("size") ? new com.shop.back.size.entity.QSize(forProperty("size")) : null;
    }

}

