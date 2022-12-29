import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Objective } from './entities/objective.entity';
import { ObjectiveService } from './objective.service';

@Module({
  imports: [TypeOrmModule.forFeature([Objective])],
  providers: [ObjectiveService],
  exports: [ObjectiveService]
})
export class ObjectiveModule {}
