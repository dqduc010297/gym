using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;

namespace ApplicationDomain.Gym.Model
{
    public class InBodyRq
    {
        public int Id { set; get; }
        public DateTime TestedDate { set; get; }
        public float BodyWater { set; get; }
        public float Protein { set; get; }
        public float Mineral { set; get; }
        public float BodyFatMass { set; get; }
        public float Weight { set; get; }
        public float SkeletalMuscleMass { set; get; }
        public int Score { set; get; }
        public float WaistHipRatio { set; get; }
        public int VisceralFatLevel { set; get; }
        public int UserId { set; get; }
    }

    public class InBodyRqMapper: Profile
    {
        public InBodyRqMapper()
        {
            CreateMap<InBodyRq, InBody>();
        }
    }
}
