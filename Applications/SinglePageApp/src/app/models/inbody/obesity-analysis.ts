export enum Evaluation {
  Normal,
  Under,
  SlightlyOver,
  Over,
}

export class ObesityAnalysis{
  bmiEvaluation: Evaluation;
  pbfEvaluation: Evaluation;
  bmi: number;
  pbf: number;
}
