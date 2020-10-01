using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class BodyCompositionHistory
    {
        public DateTime TestedDate { set; get; }
        public float Weight { set; get; }
        public float SkeletalMuscleMass { set; get; }
        public float PercentBodyFat { set; get; }
        public float Height { set; get; }
    }

    public class BodyCompositionHistoryMapper : Profile
    {
        public BodyCompositionHistoryMapper()
        {
            var mapper = CreateMap<InBody, BodyCompositionHistory>();
            mapper.ForMember(
                d => d.PercentBodyFat,
                opt => opt.MapFrom(s => s == null ? (float)0.0 : Convert.ToSingle(Math.Round(s.PercentBodyFat * 100)))
                );
            mapper.ForMember(
                d => d.Height,
                opt => opt.MapFrom(s => s.InBodyStandard.Height)
                );
        }
    }
}
