import { BodyCompositionAnalysis } from './body-composition-analysis';
import { MuscleFatAnalysis } from './muscle-fat-analysis';
import { ObesityAnalysis } from './obesity-analysis';
import { BodyCompositionHistory } from './body-composition-history';

export class InBodyDetail {
  testedDate: Date;
  weight: number;
  score: number;
  height: number;

  bodyCompositionAnalysis: BodyCompositionAnalysis = new BodyCompositionAnalysis();
  muscleFatAnalysis: MuscleFatAnalysis = new MuscleFatAnalysis();
  obesityAnalysis: ObesityAnalysis = new ObesityAnalysis();
  bodyCompositionHistories: BodyCompositionHistory[] = [];
}

