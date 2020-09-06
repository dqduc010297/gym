import { BodyCompositionAnalysis } from './body-composition-analysis';
import { MuscleFatAnalysis } from './muscle-fat-analysis';
import { ObesityAnalysis, Evaluation } from './obesity-analysis';
import { BodyCompositionHistory } from './body-composition-history';
import { InBodyStandard } from './inBody-standard';

export class InBodyDetail {
  id: number;

  testedDate: Date;
  weight: number;
  score: number;
  height: number;

  userId: number;

  bodyCompositionAnalysis: BodyCompositionAnalysis = new BodyCompositionAnalysis();
  muscleFatAnalysis: MuscleFatAnalysis = new MuscleFatAnalysis();
  obesityAnalysis: ObesityAnalysis = new ObesityAnalysis();
  bodyCompositionHistories: BodyCompositionHistory[] = [];

  bodyWater: number;
  protein: number;
  mineral: number;
  bodyFatMass: number;
  skeletalMuscleMass: number;
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

