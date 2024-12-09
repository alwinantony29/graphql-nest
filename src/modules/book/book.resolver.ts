import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Subscription,
} from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book, CreateBookInput, UpdateBookInput } from 'src/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Book')
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation('createBook')
  async create(@Args('createBookInput') createBookInput: CreateBookInput) {
    const book = await this.bookService.create(createBookInput);
    await pubSub.publish('bookCreated', { bookCreated: book });
    return book;
  }

  @Query('books')
  findAll() {
    return this.bookService.findAll();
  }

  @Query('book')
  findOne(@Args('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Mutation('updateBook')
  async update(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation('removeBook')
  remove(@Args('id') id: string) {
    return this.bookService.remove(id);
  }

  @ResolveField('author')
  async author(@Parent() book: Book) {
    return this.bookService.findOne(book.id).author();
  }

  @Subscription('bookCreated')
  bookCreated() {
    return pubSub.asyncIterableIterator('bookCreated');
  }
}
