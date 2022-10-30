import { Objective } from 'src/modules/objective/entities/objective.entity';
import { PlanOfTreatment } from 'src/modules/plan-of-treatment/entities/plan-of-treatment.entity';
import { Subjective } from 'src/modules/subjective/entities/subjective.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

@Entity({ name: 'patient_details' })
export class Patient {
  @PrimaryGeneratedColumn({ name: 'assessment_id', type: 'int' })
  assessmentId = 1;

  @Column({ name: 'patient_id' })
  patientId: number;

  @Column({ name: 'dept_id' })
  deptId: number;

  @Column({ name: 'diagnosis' })
  diagnosis: string;

  @Column({ name: 'vitals_last_recorded' })
  vitalsLastRecorded: string;

  @Column({ name: 'referring_physician' })
  referringPhysician: string;

  @Column({ name: 'mode_of_payment' })
  modeOfPayment: string;

  @Column({ name: 'treating_therapist' })
  treatingTherapist: number;

  // @OneToOne(() => Subjective, { cascade: true })
  // @JoinColumn()
  // subjective;

  // @OneToOne(() => Objective, { cascade: true })
  // @JoinColumn()
  // objective;

  // @OneToOne(() => PlanOfTreatment, { cascade: true })
  // @JoinColumn()
  // planOfTreatment;
}
