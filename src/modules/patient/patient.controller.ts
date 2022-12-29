import { Controller, Get, Param } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patient-service')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAndCountBy() {
    return this.patientService.findAndCountBy();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.patientService.findOneBy(+id);
  }

  @Get('search/:term')
  search(@Param('term') term: string) {
    return this.patientService.search(term);
  }
}
