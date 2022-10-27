import { Test, TestingModule } from '@nestjs/testing';
import { PlanOfTreatmentController } from './plan-of-treatment.controller';
import { PlanOfTreatmentService } from './plan-of-treatment.service';

describe('PlanOfTreatmentController', () => {
  let controller: PlanOfTreatmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanOfTreatmentController],
      providers: [PlanOfTreatmentService],
    }).compile();

    controller = module.get<PlanOfTreatmentController>(PlanOfTreatmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
