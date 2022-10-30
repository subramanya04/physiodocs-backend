import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanOfTreatment } from './entities/plan-of-treatment.entity';
import { PlanOfTreatmentService } from './plan-of-treatment.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlanOfTreatment])],
  providers: [PlanOfTreatmentService],
  exports: [PlanOfTreatmentService]
})
export class PlanOfTreatmentModule {}
