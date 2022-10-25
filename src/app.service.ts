import { Injectable } from '@nestjs/common';
import { PhysioDocsResponse } from './common/models';

@Injectable()
export class AppService {
  getHealth(): PhysioDocsResponse {
    return {
      messages: ['App Service is running']
    };
  }
}
