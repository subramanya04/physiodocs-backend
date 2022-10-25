import { Injectable } from '@nestjs/common';
import { PhysioDocsResponse, PhysioDocsUserRoles } from '../../common/models';
import { CreateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(private userService: UserService) {}
  create(createPatientDto: CreatePatientDto) {
    return 'This action adds a new patient';
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
}
