package com.shop.back.item.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QFile_item is a Querydsl query type for File_item
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QFile_item extends EntityPathBase<File_item> {

    private static final long serialVersionUID = 639336650L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QFile_item file_item = new QFile_item("file_item");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> isMain = createNumber("isMain", Integer.class);

    public final QItem item;

    public final StringPath name = createString("name");

    public final StringPath origin = createString("origin");

    public final StringPath path = createString("path");

    public QFile_item(String variable) {
        this(File_item.class, forVariable(variable), INITS);
    }

    public QFile_item(Path<? extends File_item> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QFile_item(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QFile_item(PathMetadata metadata, PathInits inits) {
        this(File_item.class, metadata, inits);
    }

    public QFile_item(Class<? extends File_item> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.item = inits.isInitialized("item") ? new QItem(forProperty("item"), inits.get("item")) : null;
    }

}

