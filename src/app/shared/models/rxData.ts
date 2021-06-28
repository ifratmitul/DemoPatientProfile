export default interface rxData {
  problems: [{ specify: string[]; tooth: number }];
  key: string;
  patientInfo: { name: string; age: number; address: string };
  medication: [{ medicine: string }];
  instruction: [{ suggestion: string }];
}
