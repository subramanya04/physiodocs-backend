import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Query
} from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('assessment-service')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('subjective[subjectBodyAssessment]'))
  post(
    @UploadedFile() subjectBodyAssessment,
    @Body() createAssessmentDto: CreateAssessmentDto
  ) {
    return this.assessmentService.post(
      createAssessmentDto,
      subjectBodyAssessment
    );
  }

  @Get()
  findAll(
    @Query('userId') userId: string,
    @Query('assessment') assessment: string
  ) {
    return !!assessment
      ? this.assessmentService.findAll(+userId)
      : this.assessmentService.get(+userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assessmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssessmentDto: UpdateAssessmentDto
  ) {
    return this.assessmentService.update(+id, updateAssessmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assessmentService.remove(+id);
  }
}
