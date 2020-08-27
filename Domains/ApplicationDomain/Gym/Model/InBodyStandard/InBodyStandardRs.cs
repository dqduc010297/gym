using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class InBodyStandardRs: BaseInBodyRs
    {
    }

    public class InBodyStandardRsMapper : Profile
    {
        public InBodyStandardRsMapper()
        {
            var mapper = CreateMap<InBodyStandard, InBodyStandardRs>();
            mapper.ForMember(d => d.Height, opt => opt.MapFrom(s => s.User.Height));
            mapper.ForMember(d => d.BodyCompositionAnalysis,
                opt => opt.MapFrom(s =>
                new BodyCompositionAnalysis()
                {
                    BodyWater = new TestedResult()
                    {
                        Value = 0,
                        Max = s.BodyWaterMax,
                        Min = s.BodyWaterMin
                    },
                    Protein = new TestedResult()
                    {
                        Value = 0,
                        Max = s.ProteinMax,
                        Min = s.ProteinMin
                    },
                    BodyFatMass = new TestedResult()
                    {
                        Value = 0,
                        Max = s.BodyFatMassMax,
                        Min = s.BodyFatMassMin
                    },
                    Mineral = new TestedResult()
                    {
                        Value = 0,
                        Max = s.MineralMax,
                        Min = s.MineralMin
                    },
                }));
            mapper.ForMember(d => d.MuscleFatAnalysis,
               opt => opt.MapFrom(s =>
               new MuscleFatAnalysis()
               {
                   Weight = new TestedResult()
                   {
                       Value = 0,
                       Max = s.WeightMax,
                       Min = s.WeightMin
                   },
                   SkeletalMuscleMass = new TestedResult()
                   {
                       Value = 0,
                       Max = s.SkeletalMuscleMassMax,
                       Min = s.SkeletalMuscleMassMin
                   },
                   WaistHipRatio = new TestedResult()
                   {
                       Value = 0,
                       Max = s.User.Gender == Gender.MALE ? (float)0.9 : (float)0.85,
                       Min = s.User.Gender == Gender.MALE ? (float)0.8 : (float)0.75
                   },
                   VisceralFatLevel = new TestedResult()
                   {
                       Value = 0,
                       Max = 10,
                       Min = 0
                   },
                   BodyFatMass = new TestedResult()
                   {
                       Value = 0,
                       Max = s.BodyFatMassMax,
                       Min = s.BodyFatMassMin
                   },
               }));
            mapper.ForMember(d => d.ObesityAnalysis,
                opt => opt.MapFrom(s => new ObesityAnalysis()));
        }
    }
}
