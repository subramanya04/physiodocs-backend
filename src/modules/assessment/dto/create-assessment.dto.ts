export interface PatientDetails {
  patientId: number;
  patientName?: string;
  age?: number;
  gender?: string;
  nationality?: string;
  language?: string;
  deptId: number;
  diagnosis?: string;
  vitalsLastRecorded?: string;
  referringPhysician?: string;
  modeOfPayment?: string;
  treatingTherapist: number;
}

export interface Subjective {
  assessmentId?: number;
  medicalDiagnosis: string;
  treatingDiagnosis: string;
  subjectBodyAssessment: Blob;
  historyOfPresentComplaints: string;
  currentOrPastTreatment?: string;
  medicalAndFamilyHistory?: string;
  surgicalHistory?: string;
  familyHistory?: string;
  socialHistory?: string;
  medicationAndAllergies?: string;
  otherSymptoms?: string;
}

export interface Objective {
  assessmentId?: number;
  releventManualMuscleTesting?: string;
  releventSoftTissueTesting: string;
  totalAssessment: string;
}

export interface Assessment {
  totalAssessment: string;
}

export interface PlanOfTreatment {
  assessmentId?: number;
  longTermGoals?: string;
  shortTermGoals: string;
  treatmentGiven: string;
  finalComments: string;
}

export class CreateAssessmentDto {
  patientDetails: PatientDetails;
  subjective: Subjective;
  objective: Objective;
  planOfTreatment: PlanOfTreatment;
}
