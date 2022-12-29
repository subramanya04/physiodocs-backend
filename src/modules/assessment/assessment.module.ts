import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { ObjectiveModule } from '../objective/objective.module';
import { PlanOfTreatmentModule } from '../plan-of-treatment/plan-of-treatment.module';
import { SubjectiveModule } from '../subjective/subjective.module';
import { PatientModule } from '../patient/patient.module';

@Module({
  imports: [
    ObjectiveModule,
    PatientModule,
    PlanOfTreatmentModule,
    SubjectiveModule
  ],
  controllers: [AssessmentController],
  providers: [AssessmentService]
})
export class AssessmentModule {}
