import { TestedResult } from './tested-result';

export enum Evaluation {
  Normal,
  Under,
  SlightlyOver,
  Over,
}

export class ObesityAnalysis{
  bmiEvaluation: Evaluation;
  pbfEvaluation: Evaluation;
  bmi: TestedResult = new TestedResult();
  pbf: TestedResult = new TestedResult();
}
