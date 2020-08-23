using ApplicationDomain.Entities;
using ApplicationDomain.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Entities
{
    public class InBodyStandard : EntityBase<int>
    {
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
        public int UserId { set; get; }
        public User User { set; get; }
    }
}
