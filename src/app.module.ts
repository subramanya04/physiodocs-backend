import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AuthModule,
  DepartmentModule,
  EmailModule,
  PatientModule,
  UserModule
} from './modules';
import { IsAuthenticatedGuard } from './common/guards';
import { getJwtOptions } from './utils';
import { DoctorModule } from './modules/doctor/doctor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: process.env.DB_TYPE as 'mysql' | 'mariadb',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    }),
    JwtModule.registerAsync({
      useFactory: getJwtOptions
    }),
    AuthModule,
    DepartmentModule,
    DoctorModule,
    PatientModule,
    UserModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: IsAuthenticatedGuard
    }
  ]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
