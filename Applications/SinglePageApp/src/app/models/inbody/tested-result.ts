import { Evaluation } from './obesity-analysis';

export class TestedResult {
  max: number;
  min: number;
  value: number;
  testedEvaluation: string;
  constructor(max: number, min: number, value: number) {
    this.max = max;
    this.min = min;
    this.value = value;
    this.testedEvaluation = this.getEvaluationValue(max, min, value);
  }

  private getEvaluationValue(max: number, min: number, value: number) {
    return value < min ? Evaluation[Evaluation.Under] :
      value > min && value < max ? Evaluation[Evaluation.Normal] :
        value < max * 1.1 ? Evaluation[Evaluation.SlightlyOver] :
          Evaluation[Evaluation.Over];
  }
}
