import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanOfTreatmentService } from './plan-of-treatment.service';
import { CreatePlanOfTreatmentDto } from './dto/create-plan-of-treatment.dto';
import { UpdatePlanOfTreatmentDto } from './dto/update-plan-of-treatment.dto';

@Controller('plan-of-treatment')
export class PlanOfTreatmentController {
  constructor(private readonly planOfTreatmentService: PlanOfTreatmentService) {}

  @Post()
  create(@Body() createPlanOfTreatmentDto: CreatePlanOfTreatmentDto) {
    return this.planOfTreatmentService.create(createPlanOfTreatmentDto);
  }

  @Get()
  findAll() {
    return this.planOfTreatmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planOfTreatmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanOfTreatmentDto: UpdatePlanOfTreatmentDto) {
    return this.planOfTreatmentService.update(+id, updatePlanOfTreatmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planOfTreatmentService.remove(+id);
  }
}
