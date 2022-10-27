import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectiveService } from './subjective.service';
import { CreateSubjectiveDto } from './dto/create-subjective.dto';
import { UpdateSubjectiveDto } from './dto/update-subjective.dto';

@Controller('subjective')
export class SubjectiveController {
  constructor(private readonly subjectiveService: SubjectiveService) {}

  @Post()
  create(@Body() createSubjectiveDto: CreateSubjectiveDto) {
    return this.subjectiveService.create(createSubjectiveDto);
  }

  @Get()
  findAll() {
    return this.subjectiveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectiveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectiveDto: UpdateSubjectiveDto) {
    return this.subjectiveService.update(+id, updateSubjectiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectiveService.remove(+id);
  }
}
