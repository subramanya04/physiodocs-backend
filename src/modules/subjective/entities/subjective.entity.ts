import { Patient } from '../../patient/entities/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity({ name: 'subjective_assessments' })
export class Subjective {
  @PrimaryGeneratedColumn({ name: 'assessment_id', type: 'int' })
  @OneToOne(() => Patient)
  assessmentId = 1;

  @Column({ name: 'medical_diagnosis' })
  medicalDiagnosis: string;

  @Column({ name: 'treating_diagnosis' })
  treatingDiagnosis: string;

  @Column({ name: 'subj_body_assmnt', type: 'blob' })
  subjectBodyAssessment: Buffer;

  @Column({ name: 'history_of_present_complaints' })
  historyOfPresentComplaints: string;

  @Column({ name: 'current_or_past_treatment' })
  currentOrPastTreatment: string;

  @Column({ name: 'medical_and_family_history' })
  medicalAndFamilyHistory: string;

  @Column({ name: 'surgical_history' })
  surgicalHistory: string;

  @Column({ name: 'family_history' })
  familyHistory: string;

  @Column({ name: 'social_history' })
  socialHistory: string;

  @Column({ name: 'medications_and_allergies' })
  medicationAndAllergies: string;

  @Column({ name: 'other_symptoms' })
  otherSymptoms: string;
}
