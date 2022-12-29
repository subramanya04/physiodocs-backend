import { Test, TestingModule } from '@nestjs/testing';
import { ObjectiveModule } from '../objective/objective.module';
import { PatientModule } from '../patient/patient.module';
import { PlanOfTreatmentModule } from '../plan-of-treatment/plan-of-treatment.module';
import { SubjectiveModule } from '../subjective/subjective.module';
import { AssessmentController } from './assessment.controller';
import { AssessmentService } from './assessment.service';

fdescribe('AssessmentController', () => {
  let controller: AssessmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ObjectiveModule,
        PatientModule,
        PlanOfTreatmentModule,
        SubjectiveModule
      ],
      controllers: [AssessmentController],
      providers: [AssessmentService]
    }).compile();

    controller = module.get<AssessmentController>(AssessmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
