import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorService {
  create(createDoctorDto: any) {
    return 'This action adds a new doctor';
  }

  findAll() {
    return `This action returns all doctor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  update(id: number, updateDoctorDto: any) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
