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
  create(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
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
  update(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
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
    return pubSub.asyncIterableIterator('postCreated');
  }
}
