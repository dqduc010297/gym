import { BodyCompositionAnalysis } from './body-composition-analysis';
import { MuscleFatAnalysis } from './muscle-fat-analysis';
import { ObesityAnalysis } from './obesity-analysis';

export class InBodyDetail {
  testedDate: Date;
  weight: number;
  score: number;

  bodyCompositionAnalysis: BodyCompositionAnalysis = new BodyCompositionAnalysis();
  muscleFatAnalysis: MuscleFatAnalysis = new MuscleFatAnalysis();
  obesityAnalysis: ObesityAnalysis = new ObesityAnalysis();
}

