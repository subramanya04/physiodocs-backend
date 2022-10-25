import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patient-service')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  findAndCountBy() {
    return this.patientService.findAndCountBy();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.patientService.findOneBy(+id);
  }
}
