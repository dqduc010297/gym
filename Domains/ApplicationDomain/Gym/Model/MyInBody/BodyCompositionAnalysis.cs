using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class BodyCompositionAnalysis
    {
        public TestedResult BodyWater { set; get; }
        public TestedResult Protein { set; get; }
        public TestedResult Mineral { set; get; }
        public TestedResult BodyFatMass { set; get; }
    }
}
