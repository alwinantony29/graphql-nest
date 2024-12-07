import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Author, Book } from './graphql';

const authorData = [
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

  // @ResolveField()
  // async book(@Parent() author: Author) {
  //   const { id } = author;
  //   return booksData.find((b) => b.authorId === id);
  // }
}
