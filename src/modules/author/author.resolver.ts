import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author, CreateAuthorInput, UpdateAuthorInput } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation('createAuthor')
  create(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.create(createAuthorInput);
  }

  @Query('authors')
  findAll() {
    return this.authorService.findAll();
  }

  @Query('author')
  findOne(@Args('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Mutation('updateAuthor')
  update(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation('removeAuthor')
  remove(@Args('id') id: string) {
    return this.authorService.remove(id);
  }

  @ResolveField('books')
  async books(@Parent() author: Author) {
    return this.authorService.findOne(author.id).books();
  }
}
