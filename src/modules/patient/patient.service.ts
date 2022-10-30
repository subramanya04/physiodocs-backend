import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhysioDocsUserRoles } from '../../common/models';
import { Objective } from '../objective/entities/objective.entity';
import { PlanOfTreatment } from '../plan-of-treatment/entities/plan-of-treatment.entity';
import { Subjective } from '../subjective/entities/subjective.entity';
import { CreateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private repository: Repository<Patient>,
    private userService: UserService
  ) {}
  async post({
    patientId,
    deptId,
    diagnosis,
    vitalsLastRecorded,
    referringPhysician,
    modeOfPayment,
    treatingTherapist
  }: CreatePatientDto) {
    const data = await this.repository.save({
      patientId,
      deptId,
      diagnosis,
      vitalsLastRecorded,
      referringPhysician,
      modeOfPayment,
      treatingTherapist
    });

    return {
      data,
      messages: [`Patient created successfully`]
    };
  }

  async get(patientId: number) {
    // const data = await this.repository.find({
    //   where: {
    //     patientId
    //   }
    // });
    // if (!data) {
    //   return {
    //     data,
    //     messages: [`Patient details not found`]
    //   };
    // }
    const data = await this.repository
      .createQueryBuilder('patientDetails')
      .innerJoinAndSelect(
        Subjective,
        'subjective',
        'subjective.assessmentId = patientDetails.assessmentId'
      )
      .innerJoinAndSelect(
        Objective,
        'objective',
        'objective.assessmentId = patientDetails.assessmentId'
      )
      .innerJoinAndSelect(
        PlanOfTreatment,
        'planOfTreatment',
        'planOfTreatment.assessmentId = patientDetails.assessmentId'
      )
      .where('patientDetails.patientId = :patientId', { patientId })
      .getRawMany();

    if (!data) {
      return {
        data,
        messages: [`Patient details not found`]
      };
    }

    return {
      data: data.map(assessment => ({
        ...assessment,
        subjective_subj_body_assmnt: Buffer.from(
          assessment.subjective_subj_body_assmnt,
          'base64'
        ).toString('base64')
      })),
      messages: [`Patient details fetched successfully`]
    };
  }

  async findAndCountBy() {
    const { data, count } = await this.userService.findAndCountBy({
      userRole: PhysioDocsUserRoles.PATIENT
    } as CreateUserDto);

    return {
      data,
      count,
      messages: [`Patient list fetched successfully`]
    };
  }

  async findOneBy(userId: number) {
    const { data } = await this.userService.findOneBy({
      userId,
      userRole: PhysioDocsUserRoles.PATIENT
    } as CreateUserDto);

    return {
      data,
      messages: [`Patient details fetched successfully`]
    };
  }

  async search(term: string) {
    const { data, count } = await this.userService.search(
      term,
      PhysioDocsUserRoles.PATIENT
    );

    return {
      data,
      count,
      messages: [`Patient list fetched successfully`]
    };
  }

  async patch(assessmentId: number, { patientId, deptId }: UpdatePatientDto) {
    const patientDetails = <UpdatePatientDto>{};
    if (patientId) {
      patientDetails.patientId = patientId;
    }
    if (deptId) {
      patientDetails.deptId = deptId;
    }
    const data = await this.repository.update(
      {
        assessmentId
      },
      {
        ...patientDetails
      }
    );
    if (!data) {
      return {
        data,
        messages: [`Patient details not found`]
      };
    }
    return {
      data,
      messages: [`Patient details updated successfully`]
    };
  }
}
