import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhysioDocsFilters } from 'src/common/models';
import { Repository } from 'typeorm';
import { CreateSubjectiveDto } from './dto/create-subjective.dto';
import { UpdateSubjectiveDto } from './dto/update-subjective.dto';
import { Subjective } from './entities/subjective.entity';

@Injectable()
export class SubjectiveService {
  constructor(
    @InjectRepository(Subjective)
    private repository: Repository<Subjective>
  ) {}

  async post({
    assessmentId,
    medicalDiagnosis,
    treatingDiagnosis,
    subjectBodyAssessment,
    historyOfPresentComplaints,
    currentOrPastTreatment,
    medicalAndFamilyHistory,
    surgicalHistory,
    familyHistory,
    socialHistory,
    medicationAndAllergies,
    otherSymptoms
  }: CreateSubjectiveDto) {
    const data = await this.repository.save({
      assessmentId,
      medicalDiagnosis,
      treatingDiagnosis,
      subjectBodyAssessment,
      historyOfPresentComplaints,
      currentOrPastTreatment,
      medicalAndFamilyHistory,
      surgicalHistory,
      familyHistory,
      socialHistory,
      medicationAndAllergies,
      otherSymptoms
    });

    return {
      data,
      messages: [`Subjective Assessment created successfully`]
    };
  }

  async get({ page, limit }: PhysioDocsFilters) {
    const [data, count] = await this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit
    });
    return {
      data,
      messages: [`Subjective Assessment list fetched successfully`],
      count
    };
  }

  async findOneBy(assessmentId: number) {
    const data = await this.repository.findOneBy({
      assessmentId
    });
    if (!data) {
      return {
        data,
        messages: [`Subjective Assessment details not found`]
      };
    }

    return {
      data,
      messages: [`Subjective Assessment details fetched successfully`]
    };
  }

  async patch(
    assessmentId: number,
    {
      medicalDiagnosis,
      treatingDiagnosis,
      subjectBodyAssessment,
      historyOfPresentComplaints,
      currentOrPastTreatment,
      medicalAndFamilyHistory,
      surgicalHistory,
      familyHistory,
      socialHistory,
      medicationAndAllergies,
      otherSymptoms
    }: UpdateSubjectiveDto
  ) {
    const subjectiveAssessment = <UpdateSubjectiveDto>{};
    if (medicalDiagnosis) {
      subjectiveAssessment.medicalDiagnosis = medicalDiagnosis;
    }
    if (treatingDiagnosis) {
      subjectiveAssessment.treatingDiagnosis = treatingDiagnosis;
    }
    if (subjectBodyAssessment) {
      subjectiveAssessment.subjectBodyAssessment = subjectBodyAssessment;
    }
    if (historyOfPresentComplaints) {
      subjectiveAssessment.historyOfPresentComplaints =
        historyOfPresentComplaints;
    }
    if (currentOrPastTreatment) {
      subjectiveAssessment.currentOrPastTreatment = currentOrPastTreatment;
    }
    if (medicalAndFamilyHistory) {
      subjectiveAssessment.medicalAndFamilyHistory = medicalAndFamilyHistory;
    }
    if (surgicalHistory) {
      subjectiveAssessment.surgicalHistory = surgicalHistory;
    }
    if (familyHistory) {
      subjectiveAssessment.familyHistory = familyHistory;
    }
    if (socialHistory) {
      subjectiveAssessment.socialHistory = socialHistory;
    }
    if (medicationAndAllergies) {
      subjectiveAssessment.medicationAndAllergies = medicationAndAllergies;
    }
    if (otherSymptoms) {
      subjectiveAssessment.otherSymptoms = otherSymptoms;
    }
    const data = await this.repository.update(
      {
        assessmentId
      },
      {
        ...subjectiveAssessment
      }
    );
    if (!data) {
      return {
        data,
        messages: [`Subjective Assessment details not found`]
      };
    }
    return {
      data,
      messages: [`Subjective Assessment details updated successfully`]
    };
  }

  async delete(id: string) {
    return `This action removes a #${id} Subjective Assessment`;
  }
}
