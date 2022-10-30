export class CreatePlanOfTreatmentDto {
  assessmentId: number;
  longTermGoals?: string;
  shortTermGoals: string;
  treatmentGiven: string;
  finalComments: string;
}
