import { Injectable } from '@nestjs/common';
import { CreateBookInput, UpdateBookInput } from 'src/graphql';
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

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: string) {
    return this.prisma.book.findFirstOrThrow({ where: { id } });
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    return this.prisma.book.update({ where: { id }, data: updateBookInput });
  }

  remove(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
