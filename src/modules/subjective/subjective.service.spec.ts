import { Test, TestingModule } from '@nestjs/testing';
import { SubjectiveService } from './subjective.service';

describe('SubjectiveService', () => {
  let service: SubjectiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectiveService],
    }).compile();

    service = module.get<SubjectiveService>(SubjectiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
