using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class MealPlanSummarize
    {
        public int ProteinPercent { set; get; }
        public int FatPercent { set; get; }
        public int CarbPercent { set; get; }
        public IEnumerable<string> Notes { set; get; }
        public int Calo { set; get; }
        public string Target { set; get; }
        public DateTime Start { set; get; }
        public DateTime End { set; get; }
    }
}
