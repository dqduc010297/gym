using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;

namespace ApplicationDomain.Gym.Model
{
    public class InBodyRq: BaseInBody
    {
    }

    public class InBodyRqMapper: Profile
    {
        public InBodyRqMapper()
        {
            var mapper = CreateMap<InBodyRq, InBody>();
            mapper.ForMember(d => d.BodyWater, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.BodyWater.Value));
            mapper.ForMember(d => d.Protein, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.Protein.Value));
            mapper.ForMember(d => d.Mineral, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.Mineral.Value));
            mapper.ForMember(d => d.BodyFatMass, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.BodyFatMass.Value));
            mapper.ForMember(d => d.SkeletalMuscleMass, opt => opt.MapFrom(s => s.MuscleFatAnalysis.SkeletalMuscleMass.Value));
            mapper.ForMember(d => d.Weight, opt => opt.MapFrom(s => s.MuscleFatAnalysis.Weight.Value));
            mapper.ForMember(d => d.WaistHipRatio, opt => opt.MapFrom(s => s.MuscleFatAnalysis.WaistHipRatio.Value));
            mapper.ForMember(d => d.VisceralFatLevel, opt => opt.MapFrom(s => s.MuscleFatAnalysis.VisceralFatLevel.Value));
        }
    }
}
