import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { EmailService } from '../email/email.service';
import { CreateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService
  ) {}

  async register({
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    gender,
    nationality,
    language,
    password,
    email,
    phone
  }: CreateUserDto) {
    const { data: user } = await this.userService.findOneBy({
      email
    } as CreateUserDto);
    if (user) {
      throw new BadRequestException(
        `User email '${email}' is already registered`
      );
    }

    const hashedPassword = await hash(password, +process.env.JWT_SALT_ROUNDS);

    const { data } = await this.userService.post({
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      nationality,
      language,
      email,
      phone,
      password: hashedPassword
    });

    delete data.password;
    const token = this.getAuthToken(data);

    return {
      data: {
        ...data,
        token
      },
      messages: [`User registered successfully`]
    };
  }

  async login(email: string, password: string) {
    const { data } = await this.userService.findOneBy(
      {
        email
      } as CreateUserDto,
      true
    );
    if (!data) {
      throw new BadRequestException(`Invalid user email`);
    }
    const match = await compare(password, data?.password);
    if (!match) {
      throw new BadRequestException(`Invalid user password`);
    }
    delete data.password;
    const token = this.getAuthToken(data);
    return {
      data: {
        ...data,
        token
      },
      messages: [`User logged in successfully`]
    };
  }

  async forgotPassword(email: string) {
    const { data } = await this.userService.findOneBy(
      {
        email
      } as CreateUserDto,
      true
    );
    if (!data) {
      throw new BadRequestException(`Invalid user email`);
    }
    return {
      data,
      messages: [`User logged in successfully`]
    };
  }

  async resetPassword(token: string, password: string) {
    const user = this.jwtService.verify(token);
    if (!user) {
      throw new BadRequestException(token, `Token is not valid`);
    }
    if (user.eat > Date.now()) {
      throw new BadRequestException(token, `Token has expired`);
    }
    const { data: userDetails } = await this.userService.findOneBy({
      email: user.email,
      userId: user.userId,
      userRole: user.userRole
    } as CreateUserDto);
    if (!userDetails) {
      throw new BadRequestException(`Invalid user email`);
    }
    const { data } = await this.userService.patch(userDetails.userId, {
      password
    } as CreateUserDto);
    return {
      data,
      messages: [`Password has been updated successfully`]
    };
  }

  getAuthToken(
    { firstName, lastName, email, userId: sub, userRole }: CreateUserDto,
    duration: number = +process.env.JWT_EXPIRATION_HOURS * 60 * 60 * 1000
  ): string {
    return this.jwtService.sign({
      firstName,
      lastName,
      email,
      userRole,
      sub,
      iat: Date.now(),
      eat: Date.now() + duration
    });
  }
}
