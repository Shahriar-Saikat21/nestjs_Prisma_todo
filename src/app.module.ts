import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, NoteModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
