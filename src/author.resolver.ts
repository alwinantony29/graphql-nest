import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Author, Book } from './graphql';

const authorsData = [
  { name: 'test', id: 'a1' },
  { name: 'alwin', id: 'a2' },
];
const booksData = [
  { id: '1', title: 'Zero to one', authorId: 'a1' },
  { id: '2', title: 'Zero to -ve', authorId: 'a2' },
];

@Resolver('Author')
export class AuthorResolver {
  @Query('authors')
  async authors() {
    return authorsData;
  }

  @ResolveField('books')
  async author(@Parent() author: Author) {
    const { id } = author;
    return booksData.filter((b) => b.authorId === id);
  }
}
