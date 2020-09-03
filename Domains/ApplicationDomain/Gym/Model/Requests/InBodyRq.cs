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

            var standardMapper = CreateMap<InBodyRq, InBodyStandard>();
            standardMapper.ForMember(d => d.BodyWaterMax, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.BodyWater.Max));
            standardMapper.ForMember(d => d.BodyWaterMin, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.BodyWater.Min));
            standardMapper.ForMember(d => d.ProteinMax, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.Protein.Max));
            standardMapper.ForMember(d => d.ProteinMin, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.Protein.Min));
            standardMapper.ForMember(d => d.MineralMax, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.Mineral.Max));
            standardMapper.ForMember(d => d.MineralMin, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.Mineral.Min));
            standardMapper.ForMember(d => d.BodyFatMassMax, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.BodyFatMass.Max));
            standardMapper.ForMember(d => d.BodyFatMassMin, opt => opt.MapFrom(s => s.BodyCompositionAnalysis.BodyFatMass.Min));
            standardMapper.ForMember(d => d.SkeletalMuscleMassMax, opt => opt.MapFrom(s => s.MuscleFatAnalysis.SkeletalMuscleMass.Max));
            standardMapper.ForMember(d => d.SkeletalMuscleMassMin, opt => opt.MapFrom(s => s.MuscleFatAnalysis.SkeletalMuscleMass.Min));
            standardMapper.ForMember(d => d.WeightMax, opt => opt.MapFrom(s => s.MuscleFatAnalysis.Weight.Max));
            standardMapper.ForMember(d => d.WeightMin, opt => opt.MapFrom(s => s.MuscleFatAnalysis.Weight.Min));
        }
    }
}
