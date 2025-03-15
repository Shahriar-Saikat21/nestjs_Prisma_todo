import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, data: CreateNoteDto) {
    return this.prisma.note.create({
      data: { ...data, userId },
    });
  }

  async findAll(userId: number) {
    return this.prisma.note.findMany({ where: { userId } });
  }

  async findOne(id: number) {
    return this.prisma.note.findUnique({ where: { id } });
  }
}
