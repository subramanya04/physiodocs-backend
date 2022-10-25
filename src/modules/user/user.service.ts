import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { PhysioDocsFilters } from '../../common/models';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async post({
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    gender,
    nationality,
    language,
    email,
    password,
    phone
  }: CreateUserDto) {
    const data = await this.repository.save({
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      nationality,
      language,
      email,
      password,
      phone
    });

    return {
      data,
      messages: [`User registered successfully`]
    };
  }

  async get({ page, limit }: PhysioDocsFilters) {
    const [data, count] = await this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit
    });
    return {
      data,
      messages: [`Users list fetched successfully`],
      count
    };
  }

  async findAndCountBy(filters: CreateUserDto) {
    let [data, count] = await this.repository.findAndCount({
      where: {
        ...filters
      },
      select: {
        userId: true,
        firstName: true,
        middleName: true,
        lastName: true,
        dateOfBirth: true,
        gender: true,
        nationality: true,
        language: true,
        email: true,
        phone: true
      }
    });
    return {
      data,
      messages: [`Users list fetched successfully`],
      count
    };
  }

  async findOneBy(user: CreateUserDto, includePassword = false) {
    const data = await this.repository.findOneBy({
      ...user
    });
    if (!data) {
      return {
        data,
        messages: [`User details not found`]
      };
    }
    if (!includePassword) {
      delete data.password;
    }
    return {
      data,
      messages: [`User details fetched successfully`]
    };
  }

  async patch(
    userId: number,
    {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      nationality,
      language,
      password,
      phone
    }: UpdateUserDto
  ) {
    const user = <UpdateUserDto>{};
    if (firstName) {
      user.firstName = firstName;
    }
    if (middleName) {
      user.middleName = middleName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (dateOfBirth) {
      user.dateOfBirth = dateOfBirth;
    }
    if (gender) {
      user.gender = gender;
    }
    if (nationality) {
      user.nationality = nationality;
    }
    if (language) {
      user.language = language;
    }
    if (password) {
      const hashedPassword = await hash(password, +process.env.JWT_SALT_ROUNDS);
      user.password = hashedPassword;
    }
    if (phone) {
      user.phone = phone;
    }
    const data = await this.repository.update(
      {
        userId
      },
      {
        ...user
      }
    );
    if (!data) {
      return {
        data,
        messages: [`User details not found`]
      };
    }
    return {
      data,
      messages: [`User details updated successfully`]
    };
  }

  async delete(id: string) {
    return `This action removes a #${id} user`;
  }
}
