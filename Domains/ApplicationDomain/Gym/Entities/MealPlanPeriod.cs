using ApplicationDomain.Entities;
using ApplicationDomain.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Entities
{
    public class MealPlanPeriod : EntityBase<int>
    {
        public int Index { set; get; }
        public string Title { set; get; }
        public string SubTitle { set; get; }
        public int ProteinPercent { set; get; }
        public int FatPercent { set; get; }
        public int CarbPercent { set; get; }
        public string BreakfastMenu { set; get; }
        public string BreakfastNote { set; get; }
        public int BreakfastCalo { set; get; }
        public string LunchMenu { set; get; }
        public string LunchNote { set; get; }
        public int LunchCalo { set; get; }
        public string BeforeWorkoutMenu { set; get; }
        public string BeforeWorkoutNote { set; get; }
        public int BeforeWorkoutCalo { set; get; }
        public string DinnerMenu { set; get; }
        public string DinnerNote { set; get; }
        public int DinnerCalo { set; get; }
        public string ExtraMenu { set; get; }
        public string ExtraNote { set; get; }
        public int ExtraCalo { set; get; }
        public string Note { set; get; }
        public int Calo { set; get; }
        public string Target { set; get; }
        public DateTime Start { set; get; }
        public DateTime End { set; get; }
        public bool IsLock { set; get; }
        public bool IsActivate { set; get; }
        public int UserId { set; get; }
        public User User { set; get; }
    }
}
