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
        public Evaluation Evaluation
        {
            get
            {
                return this.Value < this.Min ? Evaluation.Under :
                    this.Value > this.Min && this.Value < this.Max ? Evaluation.Normal :
                    this.Value < this.Max * 1.1 ? Evaluation.SlightlyOver :
                    Evaluation.Over;
            }
        }
    }
}
