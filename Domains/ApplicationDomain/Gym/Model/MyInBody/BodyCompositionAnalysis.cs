using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class BodyCompositionAnalysis
    {
        public float BodyWater { set; get; }
        public float Protein { set; get; }
        public float Mineral { set; get; }
        public float BodyFatMass { set; get; }
    }
}
