import { Injectable } from '@nestjs/common';
import { CreatePlanOfTreatmentDto } from './dto/create-plan-of-treatment.dto';
import { UpdatePlanOfTreatmentDto } from './dto/update-plan-of-treatment.dto';

@Injectable()
export class PlanOfTreatmentService {
  create(createPlanOfTreatmentDto: CreatePlanOfTreatmentDto) {
    return 'This action adds a new planOfTreatment';
  }

  findAll() {
    return `This action returns all planOfTreatment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planOfTreatment`;
  }

  update(id: number, updatePlanOfTreatmentDto: UpdatePlanOfTreatmentDto) {
    return `This action updates a #${id} planOfTreatment`;
  }

  remove(id: number) {
    return `This action removes a #${id} planOfTreatment`;
  }
}
