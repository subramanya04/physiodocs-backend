import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanOfTreatmentDto } from './create-plan-of-treatment.dto';

export class UpdatePlanOfTreatmentDto extends PartialType(CreatePlanOfTreatmentDto) {}
