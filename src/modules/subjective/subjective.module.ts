import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subjective } from './entities/subjective.entity';
import { SubjectiveService } from './subjective.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subjective])],
  providers: [SubjectiveService],
  exports: [SubjectiveService]
})
export class SubjectiveModule {}
