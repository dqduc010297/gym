using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Common
{
    public class TestedResult
    {
        public float Value { set; get; }
        public float Max { set; get; }
        public float Min { set; get; }
        public string TestedEvaluation
        {
            get
            {
                return this.Value < this.Min ? Enum.GetName(typeof(Evaluation), Evaluation.Under) :
                    this.Value > this.Min && this.Value < this.Max ? Enum.GetName(typeof(Evaluation), Evaluation.Normal) :
                    this.Value < this.Max * 1.1 ? Enum.GetName(typeof(Evaluation), Evaluation.SlightlyOver) :
                    Enum.GetName(typeof(Evaluation), Evaluation.Over);
            }
        }
    }
}
