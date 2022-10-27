import { Injectable } from '@nestjs/common';
import { CreateSubjectiveDto } from './dto/create-subjective.dto';
import { UpdateSubjectiveDto } from './dto/update-subjective.dto';

@Injectable()
export class SubjectiveService {
  create(createSubjectiveDto: CreateSubjectiveDto) {
    return 'This action adds a new subjective';
  }

  findAll() {
    return `This action returns all subjective`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subjective`;
  }

  update(id: number, updateSubjectiveDto: UpdateSubjectiveDto) {
    return `This action updates a #${id} subjective`;
  }

  remove(id: number) {
    return `This action removes a #${id} subjective`;
  }
}
