import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { getJwtOptions } from '../../utils';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    EmailModule,
    UserModule,
    JwtModule.registerAsync({
      useFactory: getJwtOptions
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
