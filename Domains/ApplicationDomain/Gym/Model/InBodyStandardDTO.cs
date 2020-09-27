using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;

namespace ApplicationDomain.Gym.Model
{
    public class InBodyStandardDTO
    {
        public int Id { set; get; }
        public float BodyWaterMax { set; get; }
        public float BodyWaterMin { set; get; }
        public float ProteinMax { set; get; }
        public float ProteinMin { set; get; }
        public float MineralMax { set; get; }
        public float MineralMin { set; get; }
        public float BodyFatMassMax { set; get; }
        public float BodyFatMassMin { set; get; }
        public float WeightMax { set; get; }
        public float WeightMin { set; get; }
        public float SkeletalMuscleMassMax { set; get; }
        public float SkeletalMuscleMassMin { set; get; }
        public int VisceralFatLevelMax
        {
            get { return 10; }
        }
        public int VisceralFatLevelMin
        {
            get { return 0; }
        }
        public float WaistHipRatioMax { set; get; }
        public float WaistHipRatioMin { set; get; }
        public int PercentBodyFatMax { set; get; }
        public int PercentBodyFatMin { set; get; }
        public float Height { set; get; }
        public int UserId { set; get; }
    }

    public class InBodyStandardDTOMapper : Profile
    {
        public InBodyStandardDTOMapper()
        {
            //CreateMap<InBodyStandardDTO, InBodyStandard>();
            var mapper = CreateMap<InBodyStandard, InBodyStandardDTO>();
            mapper.ForMember(
                d => d.PercentBodyFatMin,
                opt => opt.MapFrom(s => CalculatePercentBodyFatMin(s.User.DateOfBirth, s.User.Gender))
                );
            mapper.ForMember(
                d => d.PercentBodyFatMax,
                opt => opt.MapFrom(s => CalculatePercentBodyFatMax(s.User.DateOfBirth, s.User.Gender))
                );
            mapper.ForMember(d => d.WaistHipRatioMax, opt => opt.MapFrom(s => s.User.Gender == Gender.MALE ? (float)0.9 : (float)0.85));
            mapper.ForMember(d => d.WaistHipRatioMin, opt => opt.MapFrom(s => s.User.Gender == Gender.MALE ? (float)0.8 : (float)0.75));
        }

        private int CalculatePercentBodyFatMin(DateTime dateOfBirth, Gender gender)
        {
            int age = DateTime.Now.Year - dateOfBirth.Year;
            if (gender == Gender.MALE)
            {
                return age < 39 ? 8 : age < 59 ? 11 : 13;
            }
            return age < 39 ? 21 : age < 59 ? 23 : 24;
        }
        private int CalculatePercentBodyFatMax(DateTime dateOfBirth, Gender gender)
        {
            int age = DateTime.Now.Year - dateOfBirth.Year;
            if (gender == Gender.MALE)
            {
                return age < 39 ? 19 : age < 59 ? 21 : 24;
            }
            return age < 39 ? 32 : age < 59 ? 33 : 35;
        }
    }
}
