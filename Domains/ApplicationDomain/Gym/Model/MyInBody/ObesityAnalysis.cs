using ApplicationDomain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class ObesityAnalysis
    {
        public TestedResult BMI { set; get; }
        public TestedResult PBF { set; get; }
        public Evaluation BMIEvaluation { set; get; }
        public Evaluation PBFEvaluation { set; get; }
    }
}
