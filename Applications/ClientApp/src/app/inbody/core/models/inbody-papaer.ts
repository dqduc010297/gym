import { BodyCompositionAnalysis } from './body-composition-analysis';
import { MuscleFatAnalysis } from './muscle-fat-analysis';
import { ObesityAnalysis } from './obesity-analysis';
import { BodyCompositionHistory } from './body-composition-history';

export class InBodyPaper {
  id: number;

  testedDate: Date;
  height: number;
  weight: number;
  score: number;
  userId: number;

  bodyCompositionAnalysis: BodyCompositionAnalysis = new BodyCompositionAnalysis();
  muscleFatAnalysis: MuscleFatAnalysis = new MuscleFatAnalysis();
  obesityAnalysis: ObesityAnalysis = new ObesityAnalysis();
  bodyCompositionHistories: BodyCompositionHistory[] = [];
}
