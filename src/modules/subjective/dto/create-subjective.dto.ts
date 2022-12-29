export class CreateSubjectiveDto {
  assessmentId: number;
  medicalDiagnosis: string;
  treatingDiagnosis: string;
  subjectBodyAssessment: any;
  historyOfPresentComplaints: string;
  currentOrPastTreatment?: string;
  medicalAndFamilyHistory?: string;
  surgicalHistory?: string;
  familyHistory?: string;
  socialHistory?: string;
  medicationAndAllergies?: string;
  otherSymptoms?: string;
}
