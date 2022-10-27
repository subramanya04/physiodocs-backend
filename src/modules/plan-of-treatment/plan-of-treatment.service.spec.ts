import { Test, TestingModule } from '@nestjs/testing';
import { PlanOfTreatmentService } from './plan-of-treatment.service';

describe('PlanOfTreatmentService', () => {
  let service: PlanOfTreatmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanOfTreatmentService],
    }).compile();

    service = module.get<PlanOfTreatmentService>(PlanOfTreatmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
