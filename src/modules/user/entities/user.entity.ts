import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PhysioDocsUserRoles } from '../../../common/models';

@Entity({ name: 'user_details' })
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id', type: 'int' })
  userId = 1;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'middle_name' })
  middleName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: string;

  @Column({ name: 'gender' })
  gender: string;

  @Column({ name: 'nationality' })
  nationality: string;

  @Column({ name: 'preferred_language' })
  language: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'role', default: PhysioDocsUserRoles.PATIENT })
  userRole: PhysioDocsUserRoles;
}
