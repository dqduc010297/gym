using ApplicationDomain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class MuscleFatAnalysis
    {
        public TestedResult Weight { set; get; }
        public TestedResult SkeletalMuscleMass { set; get; }
        public TestedResult WaistHipRatio { set; get; }
        public TestedResult VisceralFatLevel { set; get; }
        public TestedResult BodyFatMass { set; get; }
    }
}
