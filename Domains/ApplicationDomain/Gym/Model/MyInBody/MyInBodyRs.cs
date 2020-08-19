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
        public IEnumerable<BodyCompositionHistory> BodyCompositionHistories { set; get; }
    }

    public class MyInBodyRsMapper : Profile
    {
        public MyInBodyRsMapper()
        {
            var mapper = CreateMap<InBody, MyInBodyRs>();
            mapper.ForMember(d => d.BodyCompositionAnalysis,
                opt => opt.MapFrom(s =>
                new BodyCompositionAnalysis()
                {
                    BodyWater = s.BodyWater,
                    Protein = s.Protein,
                    BodyFatMass = s.BodyFatMass,
                    Mineral = s.Mineral
                }));
            mapper.ForMember(d => d.MuscleFatAnalysis,
               opt => opt.MapFrom(s =>
               new MuscleFatAnalysis()
               {
                   Weight = s.Weight,
                   SkeletalMuscleMass = s.SkeletalMuscleMass,
                   WaistHipRatio = s.WaistHipRatio,
                   VisceralFatLevel = s.VisceralFatLevel,
                   BodyFatMass = s.BodyFatMass
               }));
            mapper.ForMember(d => d.ObesityAnalysis,
                opt => opt.MapFrom(s =>
                new ObesityAnalysis()
                {
                    BMIEvaluation = s.BMIEvaluation,
                    PBFEvaluation = s.PBFEvaluation,
                    BMI = (float)(s.Weight / ((s.User.Height / 100) * (s.User.Height / 100))),
                    PBF = s.PercentBodyFat
                }));
        }
    }
}
