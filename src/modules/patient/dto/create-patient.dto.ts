export class CreatePatientDto {
  assessmentId?: number;
  patientId: number;
  deptId: number;
  diagnosis?: string;
  vitalsLastRecorded?: string;
  referringPhysician?: string;
  modeOfPayment?: string;
  treatingTherapist: number;
}
