package com.shop.back.colors.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QColors is a Querydsl query type for Colors
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QColors extends EntityPathBase<Colors> {

    private static final long serialVersionUID = -2092599879L;

    public static final QColors colors = new QColors("colors");

    public final com.shop.back.common.QBaseEntity _super = new com.shop.back.common.QBaseEntity(this);

    public final StringPath code = createString("code");

    //inherited
    public final NumberPath<Long> createdBy = _super.createdBy;

    //inherited
    public final NumberPath<Long> deleteBy = _super.deleteBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> deleteDate = _super.deleteDate;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final NumberPath<Long> modifiedBy = _super.modifiedBy;

    public final StringPath name = createString("name");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public final StringPath rgb = createString("rgb");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateDate = _super.updateDate;

    public QColors(String variable) {
        super(Colors.class, forVariable(variable));
    }

    public QColors(Path<? extends Colors> path) {
        super(path.getType(), path.getMetadata());
    }

    public QColors(PathMetadata metadata) {
        super(Colors.class, metadata);
    }

}

