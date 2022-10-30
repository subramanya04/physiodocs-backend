import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Patient } from './entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient]), UserModule],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService]
})
export class PatientModule {}
