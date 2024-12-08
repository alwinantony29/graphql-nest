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
    return this.prisma.author.findMany();
  }

  findOne(id: string) {
    return this.prisma.author.findFirstOrThrow({ where: { id } });
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return this.prisma.author.update({
      where: { id },
      data: updateAuthorInput,
    });
  }

  remove(id: string) {
    return this.prisma.author.delete({ where: { id } });
  }
}
