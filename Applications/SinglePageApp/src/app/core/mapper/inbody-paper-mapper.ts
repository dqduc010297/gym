import { IMapper } from './imapper';
import { Injectable } from '@angular/core';
import { BodyCompositionAnalysis } from '../models/inbody/body-composition-analysis';
import { InBodyDetail } from '../models/inbody/inbody-detail';
import { InBodyPaper } from '../models/inbody/inbody-papaer';
import { MuscleFatAnalysis } from '../models/inbody/muscle-fat-analysis';
import { ObesityAnalysis } from '../models/inbody/obesity-analysis';
import { TestedResult } from '../models/inbody/tested-result';

@Injectable({ providedIn: 'root' })
export class InBodyPaperMapper implements IMapper<InBodyDetail, InBodyPaper>{
  map(source: InBodyDetail): InBodyPaper {
    return {
      id: source.id,
      score: source.score,
      testedDate: source.testedDate,
      weight: source.weight,
      height: source.inBodyStandard.height,
      userId: source.userId,
      bodyCompositionAnalysis: this.mapBodyCompositionAnalysis(source),
      muscleFatAnalysis: this.mapMuscleFatAnalysis(source),
      obesityAnalysis: this.mapObesityAnalysis(source),
      bodyCompositionHistories: source.bodyCompositionHistories,
    };
  }

  private mapBodyCompositionAnalysis(inBodyDetail: InBodyDetail): BodyCompositionAnalysis {
    const bodyWater: TestedResult = new TestedResult();
    bodyWater.max = inBodyDetail.inBodyStandard.bodyWaterMax;
    bodyWater.min = inBodyDetail.inBodyStandard.bodyWaterMin;
    bodyWater.value = inBodyDetail.bodyWater;

    const protein: TestedResult = new TestedResult();
    protein.max = inBodyDetail.inBodyStandard.proteinMax;
    protein.min = inBodyDetail.inBodyStandard.proteinMin;
    protein.value = inBodyDetail.protein;

    const mineral: TestedResult = new TestedResult();
    mineral.max = inBodyDetail.inBodyStandard.mineralMax;
    mineral.min = inBodyDetail.inBodyStandard.mineralMin;
    mineral.value = inBodyDetail.mineral;

    const bodyFatMass: TestedResult = new TestedResult();
    bodyFatMass.max = inBodyDetail.inBodyStandard.bodyFatMassMax;
    bodyFatMass.min = inBodyDetail.inBodyStandard.bodyFatMassMin;
    bodyFatMass.value = inBodyDetail.bodyFatMass;

    return {
      bodyWater,
      protein,
      mineral,
      bodyFatMass,
    };
  }

  private mapMuscleFatAnalysis(inBodyDetail: InBodyDetail): MuscleFatAnalysis {

    const skeletalMuscleMass: TestedResult = new TestedResult();
    skeletalMuscleMass.max = inBodyDetail.inBodyStandard.skeletalMuscleMassMax;
    skeletalMuscleMass.min = inBodyDetail.inBodyStandard.skeletalMuscleMassMin;
    skeletalMuscleMass.value = inBodyDetail.skeletalMuscleMass;

    const weight: TestedResult = new TestedResult();
    weight.max = inBodyDetail.inBodyStandard.weightMax;
    weight.min = inBodyDetail.inBodyStandard.weightMin;
    weight.value = inBodyDetail.weight;

    const bodyFatMass: TestedResult = new TestedResult();
    bodyFatMass.max = inBodyDetail.inBodyStandard.bodyFatMassMax;
    bodyFatMass.min = inBodyDetail.inBodyStandard.bodyFatMassMin;
    bodyFatMass.value = inBodyDetail.bodyFatMass;

    const visceralFatLevel: TestedResult = new TestedResult();
    visceralFatLevel.max = inBodyDetail.inBodyStandard.visceralFatLevelMax;
    visceralFatLevel.min = inBodyDetail.inBodyStandard.visceralFatLevelMin;
    visceralFatLevel.value = inBodyDetail.visceralFatLevel;

    const waistHipRatio: TestedResult = new TestedResult();
    waistHipRatio.max = inBodyDetail.inBodyStandard.waistHipRatioMax;
    waistHipRatio.min = inBodyDetail.inBodyStandard.waistHipRatioMin;
    waistHipRatio.value = inBodyDetail.waistHipRatio;

    return {
      skeletalMuscleMass,
      weight,
      bodyFatMass,
      visceralFatLevel,
      waistHipRatio,
    };
  }

  private mapObesityAnalysis(inBodyDetail: InBodyDetail): ObesityAnalysis {
    const bmi: TestedResult = new TestedResult();
    bmi.max = 25;
    bmi.min = 18.5;
    bmi.value = inBodyDetail.bmi;

    const pbf: TestedResult = new TestedResult();
    pbf.max = inBodyDetail.inBodyStandard.percentBodyFatMax;
    pbf.min = inBodyDetail.inBodyStandard.percentBodyFatMin;
    pbf.value = inBodyDetail.percentBodyFat;

    return {
      bmi,
      pbf,
      bmiEvaluation: inBodyDetail.bmiEvaluation,
      pbfEvaluation: inBodyDetail.pbfEvaluation,
    };
  }
}
