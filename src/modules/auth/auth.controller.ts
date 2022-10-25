import { Controller, Post, Body } from '@nestjs/common';
import { IsPublic } from '../../common/decorators';
import { CreateUserDto, UpdateUserDto } from '../user/dto';
import { AuthService } from './auth.service';

@Controller('auth-service')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @IsPublic()
  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.login(email, password);
  }

  @Post('forgot-password')
  forgotPassword(@Body() { email }: CreateUserDto) {
    return this.authService.forgotPassword(email);
  }

  @Post('reset-password')
  resetPassword(@Body() { token, password }: UpdateUserDto) {
    return this.authService.resetPassword(token, password);
  }
}
