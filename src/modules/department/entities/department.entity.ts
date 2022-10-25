import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn({ name: 'dept_id' })
  deptId: number;

  @Column({ name: 'dept_name' })
  deptName: string;

  @Column({ name: 'creation_date' })
  creationDate: Date;
}
