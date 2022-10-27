import { Module } from '@nestjs/common';
import { PlanOfTreatmentService } from './plan-of-treatment.service';
import { PlanOfTreatmentController } from './plan-of-treatment.controller';

@Module({
  controllers: [PlanOfTreatmentController],
  providers: [PlanOfTreatmentService]
})
export class PlanOfTreatmentModule {}
