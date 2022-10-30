import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
