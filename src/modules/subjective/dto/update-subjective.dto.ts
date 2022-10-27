import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectiveDto } from './create-subjective.dto';

export class UpdateSubjectiveDto extends PartialType(CreateSubjectiveDto) {}
