import { IMapper } from './imapper';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyPaper } from 'src/app/models/inbody/inbody-papaer';
import { BodyCompositionAnalysis } from 'src/app/models/inbody/body-composition-analysis';
import { MuscleFatAnalysis } from 'src/app/models/inbody/muscle-fat-analysis';
import { ObesityAnalysis } from 'src/app/models/inbody/obesity-analysis';
import { TestedResult } from 'src/app/models/inbody/tested-result';

export class InBodyPaperMapper implements IMapper<InBodyDetail, InBodyPaper>{
  map(source: InBodyDetail): InBodyPaper {
    return {
      id: source.id,
      score: source.score,
      testedDate: source.testedDate,
      weight: source.weight,
      userId: source.userId,
      bodyCompositionAnalysis: this.mapBodyCompositionAnalysis(source),
      muscleFatAnalysis: this.mapMuscleFatAnalysis(source),
      obesityAnalysis: new ObesityAnalysis(),
    };
  }

  private mapBodyCompositionAnalysis(inBodyDetail: InBodyDetail): BodyCompositionAnalysis {
    return {
      bodyWater: new TestedResult(
        inBodyDetail.inBodyStandard.bodyWaterMax,
        inBodyDetail.inBodyStandard.bodyWaterMin,
        inBodyDetail.bodyWater
      ),
      protein: new TestedResult(
        inBodyDetail.inBodyStandard.proteinMax,
        inBodyDetail.inBodyStandard.proteinMin,
        inBodyDetail.protein
      ),
      mineral: new TestedResult(
        inBodyDetail.inBodyStandard.mineralMax,
        inBodyDetail.inBodyStandard.mineralMin,
        inBodyDetail.mineral
      ),
      bodyFatMass: new TestedResult(
        inBodyDetail.inBodyStandard.bodyFatMassMax,
        inBodyDetail.inBodyStandard.bodyFatMassMin,
        inBodyDetail.bodyFatMass
      ),
    };
  }

  private mapMuscleFatAnalysis(inBodyDetail: InBodyDetail): MuscleFatAnalysis {
    return {
      skeletalMuscleMass: new TestedResult(
        inBodyDetail.inBodyStandard.skeletalMuscleMassMax,
        inBodyDetail.inBodyStandard.skeletalMuscleMassMin,
        inBodyDetail.skeletalMuscleMass
      ),
      weight: new TestedResult(
        inBodyDetail.inBodyStandard.weightMax,
        inBodyDetail.inBodyStandard.weightMin,
        inBodyDetail.weight
      ),
      bodyFatMass: new TestedResult(
        inBodyDetail.inBodyStandard.bodyFatMassMax,
        inBodyDetail.inBodyStandard.bodyFatMassMin,
        inBodyDetail.bodyFatMass
      ),
      visceralFatLevel: new TestedResult(
        inBodyDetail.inBodyStandard.visceralFatLevelMax,
        inBodyDetail.inBodyStandard.visceralFatLevelMin,
        inBodyDetail.visceralFatLevel
      ),
      waistHipRatio: new TestedResult(
        inBodyDetail.inBodyStandard.waistHipRatioMax,
        inBodyDetail.inBodyStandard.waistHipRatioMin,
        inBodyDetail.waistHipRatio
      ),
    };
  }

  private mapObesityAnalysis(inBodyDetail: InBodyDetail): ObesityAnalysis {
    return {
      bmi: new TestedResult(
        25,
        18.5,
        inBodyDetail.skeletalMuscleMass
      ),
      pbf: new TestedResult(
        inBodyDetail.inBodyStandard.percentBodyFatMax,
        inBodyDetail.inBodyStandard.percentBodyFatMin,
        inBodyDetail.bodyFatMass / inBodyDetail.weight
      ),
      bmiEvaluation: inBodyDetail.bmiEvaluation,
      pbfEvaluation: inBodyDetail.pbfEvaluation,
    };
  }
}
