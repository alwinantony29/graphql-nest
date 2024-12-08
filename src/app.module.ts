import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BookResolver } from './book.resolvers';
import { AuthorResolver } from './author.resolver';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    SharedModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [BookResolver, AuthorResolver],
})
export class AppModule {}
