
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;

    abstract authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
}

export class Book {
    id: string;
    title?: Nullable<string>;
    author?: Nullable<Author>;
    authorId?: Nullable<string>;
}

export class Author {
    id: string;
    name?: Nullable<string>;
    books?: Nullable<Nullable<Book>[]>;
}

type Nullable<T> = T | null;
