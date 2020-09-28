import { TestedResult } from './tested-result';

export class MuscleFatAnalysis {
  weight: TestedResult = new TestedResult();
  skeletalMuscleMass: TestedResult = new TestedResult();
  waistHipRatio: TestedResult = new TestedResult();
  visceralFatLevel: TestedResult = new TestedResult();
  bodyFatMass: TestedResult = new TestedResult();
}
