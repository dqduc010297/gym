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
        public TestedResult Weight { set; get; }

        public BodyCompositionAnalysis()
        {
            this.BodyWater = new TestedResult();
            this.Protein = new TestedResult();
            this.Mineral = new TestedResult();
            this.BodyFatMass = new TestedResult();
        }
    }
}
