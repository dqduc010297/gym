using ApplicationDomain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class ObesityAnalysis
    {
        public float BMI { set; get; }
        public float PBF { set; get; }
        public Evaluation BMIEvaluation { set; get; }
        public Evaluation PBFEvaluation { set; get; }
    }
}
