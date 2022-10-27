import { Module } from '@nestjs/common';
import { SubjectiveService } from './subjective.service';
import { SubjectiveController } from './subjective.controller';

@Module({
  controllers: [SubjectiveController],
  providers: [SubjectiveService]
})
export class SubjectiveModule {}
