import { PhysioDocsUserRoles } from '../../../common/models';

export class CreateUserDto {
  userId?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  language: string;
  email: string;
  password: string;
  phone: string;
  userRole?: PhysioDocsUserRoles;
}
