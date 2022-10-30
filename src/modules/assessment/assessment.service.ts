import { Injectable } from '@nestjs/common';
import { ObjectiveService } from '../objective/objective.service';
import { PatientService } from '../patient/patient.service';
import { PlanOfTreatmentService } from '../plan-of-treatment/plan-of-treatment.service';
import { SubjectiveService } from '../subjective/subjective.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';

@Injectable()
export class AssessmentService {
  constructor(
    private patientService: PatientService,
    private objectiveService: ObjectiveService,
    private subjectiveService: SubjectiveService,
    private planOfTreatmentService: PlanOfTreatmentService
  ) {}
  async post(assessment: CreateAssessmentDto, subjectBodyAssessment: Buffer) {
    console.log(`Payload: `, assessment, subjectBodyAssessment);
    const { data: patientDetails } = await this.patientService.post(
      assessment.patientDetails
    );

    const { data: subjective } = await this.subjectiveService.post({
      ...assessment.subjective,
      assessmentId: patientDetails.assessmentId,
      subjectBodyAssessment: subjectBodyAssessment.buffer
    });

    const { data: objective } = await this.objectiveService.post({
      ...assessment.objective,
      assessmentId: patientDetails.assessmentId
    });

    const { data: planOfTreatment } = await this.planOfTreatmentService.post({
      ...assessment.planOfTreatment,
      assessmentId: patientDetails.assessmentId
    });

    return {
      data: {
        patientDetails,
        subjective,
        objective,
        planOfTreatment
      },
      messages: [`Assessment created successfully`]
    };
  }

  async findAll(userId: number) {
    const { data } = await this.patientService.get(userId);

    return {
      data,
      messages: [`Assessment list fetched successfully`]
    };
  }

  async get(userId: number) {
    const { data } = await this.patientService.get(userId);

    return {
      data,
      messages: [`Assessment list fetched successfully`]
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} assessment`;
  }

  update(id: number, updateAssessmentDto: UpdateAssessmentDto) {
    return `This action updates a #${id} assessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessment`;
  }
}
