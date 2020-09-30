import { BodyCompositionHistory } from './body-composition-history';
import { InBodyStandard } from './inBody-standard';
import { Evaluation } from './tested-result';

export class InBody {
  id: number;

  testedDate: Date;
  weight: number;
  score: number;
  userId: number;

  bodyCompositionHistories: BodyCompositionHistory[] = [];

  bodyWater: number;
  protein: number;
  mineral: number;
  bodyFatMass: number;
  skeletalMuscleMass: number;
  bmi: number;
  bmiEvaluation: Evaluation;
  pbfEvaluation: Evaluation;
  waistHipRatio: number;
  visceralFatLevel: number;
  percentBodyFat: number;
  inBodyStandard: InBodyStandard = new InBodyStandard();

  constructor() {
    this.bodyWater = 0;
    this.protein = 0;
    this.mineral = 0;
    this.bodyFatMass = 0;
    this.skeletalMuscleMass = 0;
    this.weight = 0;
    this.waistHipRatio = 0;
    this.visceralFatLevel = 0;
    this.bmiEvaluation = Evaluation.Under;
    this.pbfEvaluation = Evaluation.Under;
  }
}

