import { Injectable } from '@nestjs/common';

import { UpdateBookInput } from './dto/update-book.input';
import { Book, CreateBookInput } from 'src/graphql';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBookInput: CreateBookInput) {
    console.log('This action adds a new book');
    return this.prisma.book.create({
      data: {
        title: createBookInput.title,
        author: { connect: { id: createBookInput.authorId } },
      },
    });
  }

  findAll(): Book[] {
    return [{ id: '123', authorId: '1', title: 'hey bro you OK?' }];
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
