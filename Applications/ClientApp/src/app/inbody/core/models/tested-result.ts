export enum Evaluation {
  Normal,
  Under,
  SlightlyOver,
  Over,
}

export class TestedResult {
  max: number;
  min: number;
  value: number;

  constructor() {
  }

  get testedEvaluation() {
    return this.value < this.min ? Evaluation[Evaluation.Under] :
      this.value > this.min && this.value < this.max ? Evaluation[Evaluation.Normal] :
        this.value < this.max * 1.1 ? Evaluation[Evaluation.SlightlyOver] :
          Evaluation[Evaluation.Over];
  }
}
