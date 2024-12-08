import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { CreateAuthorInput, UpdateAuthorInput } from 'src/graphql';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAuthorInput: CreateAuthorInput) {
    return this.prisma.author.create({
      data: createAuthorInput,
    });
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: string) {
    return `This action removes a #${id} author`;
  }
}
