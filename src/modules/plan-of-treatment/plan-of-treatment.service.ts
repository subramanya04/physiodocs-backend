import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhysioDocsFilters } from 'src/common/models';
import { Repository } from 'typeorm';
import { CreatePlanOfTreatmentDto } from './dto/create-plan-of-treatment.dto';
import { UpdatePlanOfTreatmentDto } from './dto/update-plan-of-treatment.dto';
import { PlanOfTreatment } from './entities/plan-of-treatment.entity';

@Injectable()
export class PlanOfTreatmentService {
  constructor(
    @InjectRepository(PlanOfTreatment)
    private repository: Repository<PlanOfTreatment>
  ) {}
  async post({
    assessmentId,
    longTermGoals,
    shortTermGoals,
    treatmentGiven,
    finalComments
  }: CreatePlanOfTreatmentDto) {
    const data = await this.repository.save({
      assessmentId,
      longTermGoals,
      shortTermGoals,
      treatmentGiven,
      finalComments
    });

    return {
      data,
      messages: [`Plan of Treatment created successfully`]
    };
  }

  async get({ page, limit }: PhysioDocsFilters) {
    const [data, count] = await this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit
    });
    return {
      data,
      messages: [`Plan of Treatment list fetched successfully`],
      count
    };
  }

  async findOneBy(assessment: CreatePlanOfTreatmentDto) {
    const data = await this.repository.findOneBy({
      ...assessment
    });
    if (!data) {
      return {
        data,
        messages: [`Plan of Treatment details not found`]
      };
    }

    return {
      data,
      messages: [`Plan of Treatment details fetched successfully`]
    };
  }

  async patch(
    assessmentId: number,
    {
      longTermGoals,
      shortTermGoals,
      treatmentGiven,
      finalComments
    }: UpdatePlanOfTreatmentDto
  ) {
    const planOfAssessment = <UpdatePlanOfTreatmentDto>{};
    if (longTermGoals) {
      planOfAssessment.longTermGoals = longTermGoals;
    }
    if (shortTermGoals) {
      planOfAssessment.shortTermGoals = shortTermGoals;
    }
    if (treatmentGiven) {
      planOfAssessment.treatmentGiven = treatmentGiven;
    }
    if (finalComments) {
      planOfAssessment.finalComments = finalComments;
    }
    const data = await this.repository.update(
      {
        assessmentId
      },
      {
        ...planOfAssessment
      }
    );
    if (!data) {
      return {
        data,
        messages: [`Plan of Treatment details not found`]
      };
    }
    return {
      data,
      messages: [`Plan of Treatment details updated successfully`]
    };
  }

  async delete(id: string) {
    return `This action removes a #${id} Plan of Treatment`;
  }
}
