using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class MyInBodyRs
    {
        public BodyCompositionAnalysis BodyCompositionAnalysis { set; get; }
        public MuscleFatAnalysis MuscleFatAnalysis { set; get; }
        public ObesityAnalysis ObesityAnalysis { set; get; }
        public int Score { set; get; }
        public DateTime TestedDate { set; get; }
        public float Weight { set; get; }
        public float Height { set; get; }
        public IEnumerable<BodyCompositionHistory> BodyCompositionHistories { set; get; }
    }

    public class MyInBodyRsMapper : Profile
    {
        public MyInBodyRsMapper()
        {
            var mapper = CreateMap<InBody, MyInBodyRs>();
            mapper.ForMember(d => d.Height, opt => opt.MapFrom(s => s.User.Height));
            mapper.ForMember(d => d.BodyCompositionAnalysis,
                opt => opt.MapFrom(s =>
                new BodyCompositionAnalysis()
                {
                    BodyWater = new TestedResult()
                    {
                        Value = s.BodyWater,
                        Max = s.InBodyStandard.BodyWaterMax,
                        Min = s.InBodyStandard.BodyWaterMin
                    },
                    Protein = new TestedResult()
                    {
                        Value = s.Protein,
                        Max = s.InBodyStandard.ProteinMax,
                        Min = s.InBodyStandard.ProteinMin
                    },
                    BodyFatMass = new TestedResult()
                    {
                        Value = s.BodyFatMass,
                        Max = s.InBodyStandard.BodyFatMassMax,
                        Min = s.InBodyStandard.BodyFatMassMin
                    },
                    Mineral = new TestedResult()
                    {
                        Value = s.Mineral,
                        Max = s.InBodyStandard.MineralMax,
                        Min = s.InBodyStandard.MineralMin
                    },
                }));
            mapper.ForMember(d => d.MuscleFatAnalysis,
               opt => opt.MapFrom(s =>
               new MuscleFatAnalysis()
               {
                   Weight = new TestedResult()
                   {
                       Value = s.Weight,
                       Max = s.InBodyStandard.WeightMax,
                       Min = s.InBodyStandard.WeightMin
                   },
                   SkeletalMuscleMass = new TestedResult()
                   {
                       Value = s.SkeletalMuscleMass,
                       Max = s.InBodyStandard.SkeletalMuscleMassMax,
                       Min = s.InBodyStandard.SkeletalMuscleMassMin
                   },
                   WaistHipRatio = new TestedResult()
                   {
                       Value = s.WaistHipRatio,
                       Max = s.User.Gender == Gender.MALE ? (float)0.9 : (float)0.85,
                       Min = s.User.Gender == Gender.MALE ? (float)0.8 : (float)0.75
                   },
                   VisceralFatLevel = new TestedResult()
                   {
                       Value = s.VisceralFatLevel,
                       Max = 10,
                       Min = 0
                   },
                   BodyFatMass = new TestedResult()
                   {
                       Value = s.BodyFatMass,
                       Max = s.InBodyStandard.BodyFatMassMax,
                       Min = s.InBodyStandard.BodyFatMassMin
                   },
               }));
            mapper.ForMember(d => d.ObesityAnalysis,
                opt => opt.MapFrom(s =>
                new ObesityAnalysis()
                {
                    BMIEvaluation = s.BMIEvaluation,
                    PBFEvaluation = s.PBFEvaluation,
                    BMI = new TestedResult()
                    {
                        Value = (float)Math.Round((s.Weight / (s.User.Height * s.User.Height)), 1),
                        Min = (float)18.5,
                        Max = (float)20.0
                    },
                    PBF = new TestedResult()
                    {
                        Value = (float)Math.Round(s.PercentBodyFat * 100, 1),
                        Min = (float)10.0,
                        Max = (float)20.0
                    }
                }));
        }
    }
}
