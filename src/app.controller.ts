import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PhysioDocsResponse } from './common/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): PhysioDocsResponse {
    return this.appService.getHealth();
  }
}
