import { TestedResult, Evaluation } from './tested-result';


export class ObesityAnalysis{
  bmiEvaluation: Evaluation;
  pbfEvaluation: Evaluation;
  bmi: TestedResult = new TestedResult();
  pbf: TestedResult = new TestedResult();
}
