import { EmailTypes } from '../models';
import { template as forgotPasswordTemplate } from './forgot-password';

export const EmailTemplates = new Map([
  [EmailTypes.FORGOT_PASSWORD, forgotPasswordTemplate]
]);
