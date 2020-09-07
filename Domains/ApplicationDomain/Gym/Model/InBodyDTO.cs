using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.Model.MyInBody;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class InBodyDTO
    {
        public int Id { set; get; }
        public DateTime TestedDate { set; get; }
        public float BodyWater { set; get; }
        public float Protein { set; get; }
        public float Mineral { set; get; }
        public float BodyFatMass { set; get; }
        public float PercentBodyFat { set; get; }
        public float Weight { set; get; }
        public float SkeletalMuscleMass { set; get; }
        public int Score { set; get; }
        public float BMI { set; get; }
        public Evaluation BMIEvaluation { set; get; }
        public Evaluation PBFEvaluation { set; get; }
        public float WaistHipRatio { set; get; }
        public int VisceralFatLevel { set; get; }
        public int UserId { set; get; }
        public int InBodyStandardId { set; get; }
    }

    public class InBodyDTOMapper : Profile
    {
        public InBodyDTOMapper()
        {
            CreateMap<InBodyDTO, InBody>();
            CreateMap<InBody, InBodyDTO>()
                .Include<InBody, MyInBodyRs>()
                .ForMember(d => d.BMI, opt => opt.MapFrom(s => (float)Math.Round((s.Weight / (s.User.Height * s.User.Height)), 1)))
                .ForMember(d => d.PercentBodyFat, opt => opt.MapFrom(s => (float)Math.Round(s.PercentBodyFat * 100, 1)));
        }
    }
}
