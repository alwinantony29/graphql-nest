
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAuthorInput {
    name: string;
}

export class UpdateAuthorInput {
    id: string;
    name?: Nullable<string>;
}

export class CreateBookInput {
    title?: Nullable<string>;
    authorId?: Nullable<string>;
}

export class UpdateBookInput {
    id: number;
}

export class Author {
    id: string;
    name?: Nullable<string>;
    books?: Nullable<Nullable<Book>[]>;
}

export abstract class IQuery {
    abstract authors(): Nullable<Author>[] | Promise<Nullable<Author>[]>;

    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract book(id: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createAuthor(createAuthorInput: CreateAuthorInput): Author | Promise<Author>;

    abstract updateAuthor(updateAuthorInput: UpdateAuthorInput): Author | Promise<Author>;

    abstract removeAuthor(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract updateBook(updateBookInput: UpdateBookInput): Book | Promise<Book>;

    abstract removeBook(id: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export class Book {
    id: string;
    title?: Nullable<string>;
    author?: Nullable<Author>;
    authorId?: Nullable<string>;
}

type Nullable<T> = T | null;
