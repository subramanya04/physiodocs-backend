import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  PhysioDocsFilters,
  PhysioDocsResponse,
  PhysioDocsUserRoles
} from '../../common/models';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private repository: Repository<Department>
  ) {}

  getHealth(): PhysioDocsResponse {
    return {
      messages: ['Department Service is running']
    };
  }

  post(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  get({ page, limit }: PhysioDocsFilters) {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit
    });
  }

  async getById(deptId: number) {
    const data = await this.repository.findOneBy({
      deptId
    });
    if (!data) {
      return {
        data,
        messages: [`Department details not found`]
      };
    }
    return {
      data,
      messages: [`Department details fetched successfully`]
    };
  }

  patch(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  delete(id: number) {
    return `This action removes a #${id} department`;
  }
}
