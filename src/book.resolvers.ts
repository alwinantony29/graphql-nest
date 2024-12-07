import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from './graphql';

const authorsData = [
  { name: 'test', id: 'a1' },
  { name: 'alwin', id: 'a2' },
];
const booksData = [
  { id: '1', title: 'Zero to one', authorId: 'a1' },
  { id: '2', title: 'Zero to -ve', authorId: 'a2' },
];

@Resolver('Book')
export class BookResolver {
  @Query('books')
  async books() {
    return booksData;
  }

  @ResolveField('author')
  async book(@Parent() book: Book) {
    const { authorId } = book;
    return authorsData.find((b) => b.id === authorId);
  }
}
