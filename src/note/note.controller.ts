import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post('create/:userId')
  create(
    @Param('userId') userId: number,
    @Body() createNoteDto: CreateNoteDto
  ) {
    return this.noteService.create(Number(userId), createNoteDto);
  }

  @Get('note/:userId')
  findAll(@Param('userId') userId: number) {
    return this.noteService.findAll(Number(userId));
  }
}
