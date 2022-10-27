import { Test, TestingModule } from '@nestjs/testing';
import { SubjectiveController } from './subjective.controller';
import { SubjectiveService } from './subjective.service';

describe('SubjectiveController', () => {
  let controller: SubjectiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectiveController],
      providers: [SubjectiveService],
    }).compile();

    controller = module.get<SubjectiveController>(SubjectiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
