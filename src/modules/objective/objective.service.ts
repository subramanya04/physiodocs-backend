import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhysioDocsFilters } from 'src/common/models';
import { Repository } from 'typeorm';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';
import { Objective } from './entities/objective.entity';

@Injectable()
export class ObjectiveService {
  constructor(
    @InjectRepository(Objective)
    private repository: Repository<Objective>
  ) {}

  async post({
    assessmentId,
    releventManualMuscleTesting,
    releventSoftTissueTesting,
    totalAssessment
  }: CreateObjectiveDto) {
    const data = await this.repository.save({
      assessmentId,
      releventManualMuscleTesting,
      releventSoftTissueTesting,
      totalAssessment
    });

    return {
      data,
      messages: [`Objective Assessment created successfully`]
    };
  }

  async get({ page, limit }: PhysioDocsFilters) {
    const [data, count] = await this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit
    });
    return {
      data,
      messages: [`Objective Assessment list fetched successfully`],
      count
    };
  }

  async findOneBy(objective: CreateObjectiveDto) {
    const data = await this.repository.findOneBy({
      ...objective
    });
    if (!data) {
      return {
        data,
        messages: [`Objective Assessment details not found`]
      };
    }

    return {
      data,
      messages: [`Objective Assessment details fetched successfully`]
    };
  }

  async patch(
    assessmentId: number,
    {
      releventManualMuscleTesting,
      releventSoftTissueTesting,
      totalAssessment
    }: UpdateObjectiveDto
  ) {
    const objective = <UpdateObjectiveDto>{};
    if (releventManualMuscleTesting) {
      objective.releventManualMuscleTesting = releventManualMuscleTesting;
    }
    if (releventSoftTissueTesting) {
      objective.releventSoftTissueTesting = releventSoftTissueTesting;
    }
    if (totalAssessment) {
      objective.totalAssessment = totalAssessment;
    }
    const data = await this.repository.update(
      {
        assessmentId
      },
      {
        ...objective
      }
    );
    if (!data) {
      return {
        data,
        messages: [`Objective Assessment details not found`]
      };
    }
    return {
      data,
      messages: [`Objective Assessment details updated successfully`]
    };
  }

  async delete(id: string) {
    return `This action removes a #${id} Objective`;
  }
}
