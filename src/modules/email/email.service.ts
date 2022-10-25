import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

@Injectable()
export class EmailService {
  async sendEmail(to: string, from: string, subject: string, template: string) {
    return of(`Email has been sent successfully`);
  }
}
