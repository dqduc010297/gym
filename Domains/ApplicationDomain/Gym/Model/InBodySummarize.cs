using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class InBodySummarize
    {
        public float Weight { set; get; }
        public float SkeletalMuscleMass { set; get; }
        public float BodyFatMass { set; get; }
    }

    public class InBodySummarizeMapper: Profile
    {
        public InBodySummarizeMapper()
        {
            CreateMap<InBody, InBodySummarize>();
        }
    }
}
