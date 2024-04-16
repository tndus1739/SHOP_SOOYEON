package com.shop.back.order.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOrders is a Querydsl query type for Orders
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrders extends EntityPathBase<Orders> {

    private static final long serialVersionUID = 1115359636L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOrders orders = new QOrders("orders");

    public final com.shop.back.common.QBaseEntity _super = new com.shop.back.common.QBaseEntity(this);

    public final NumberPath<Integer> cnt = createNumber("cnt", Integer.class);

    public final StringPath code = createString("code");

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

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateDate = _super.updateDate;

    public QOrders(String variable) {
        this(Orders.class, forVariable(variable), INITS);
    }

    public QOrders(Path<? extends Orders> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOrders(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOrders(PathMetadata metadata, PathInits inits) {
        this(Orders.class, metadata, inits);
    }

    public QOrders(Class<? extends Orders> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.item = inits.isInitialized("item") ? new com.shop.back.item.entity.QItem(forProperty("item"), inits.get("item")) : null;
        this.member = inits.isInitialized("member") ? new com.shop.back.member.entity.QMember(forProperty("member")) : null;
    }

}

