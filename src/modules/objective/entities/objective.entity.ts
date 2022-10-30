import { Patient } from 'src/modules/patient/entities/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity({ name: 'objective_assesments' })
export class Objective {
  @PrimaryGeneratedColumn({ name: 'assessment_id', type: 'int' })
  @OneToOne(() => Patient)
  assessmentId = 1;

  @Column({ name: 'relevent_manual_muscle_testing' })
  releventManualMuscleTesting: string;

  @Column({ name: 'relevent_soft_tissue_testing' })
  releventSoftTissueTesting: string;

  @Column({ name: 'total_assessment' })
  totalAssessment: string;
}
