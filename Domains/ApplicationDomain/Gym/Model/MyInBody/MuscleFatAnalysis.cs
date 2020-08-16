using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class MuscleFatAnalysis
    {
        public float Weight { set; get; }
        public float SkeletalMuscleMass { set; get; }
        public float WaistHipRatio { set; get; }
        public int VisceralFatLevel { set; get; }
        public float BodyFatMass { set; get; }
    }
}
