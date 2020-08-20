using ApplicationDomain.Common;
using ApplicationDomain.Entities;
using ApplicationDomain.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Entities
{
    public class InBody : EntityBase<int>
    {
        public DateTime TestedDate { set; get; }
        public float BodyWater { set; get; }
        public float Protein { set; get; }
        public float Mineral { set; get; }
        public float BodyFatMass { set; get; }
        public float PercentBodyFat { set; get; }
        public float Weight { set; get; }
        public float SkeletalMuscleMass { set; get; }
        public int Score { set; get; }
        public Evaluation BMIEvaluation { set; get; }
        public Evaluation PBFEvaluation { set; get; }
        public float WaistHipRatio { set; get; }
        public int VisceralFatLevel { set; get; }
        public int UserId { set; get; }
        public User User { set; get; }
        public int InBodyStandardId { set; get; }
        public InBodyStandard InBodyStandard { set; get; }
    }
}
