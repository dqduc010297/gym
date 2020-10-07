using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class MealPlanPeriodDTO
    {
        public int Id { set; get; }
        public MealPlanSummarize MealPlanSummarize { set; get; }
        public Meal Breakfast { set; get; }
        public Meal Lunch { set; get; }
        public Meal BeforeWorkout { set; get; }
        public Meal Dinner { set; get; }
        public Meal Extra { set; get; }
        public bool IsLock { set; get; }
        public bool IsActivate { set; get; }
        public int Index { set; get; }
    }

    public class MealPlanPeriodDTOMapper :Profile
    {
        public MealPlanPeriodDTOMapper()
        {
            CreateMap<MealPlanPeriodDTO, MealPlanPeriod>()
                .ForMember(d => d.BreakfastCalo, opt => opt.MapFrom(s => s.Breakfast.Calo))
                .ForMember(d => d.BreakfastMenu, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Breakfast.Menu)))
                .ForMember(d => d.BreakfastNote, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Breakfast.Notes)))
                .ForMember(d => d.LunchCalo, opt => opt.MapFrom(s => s.Lunch.Calo))
                .ForMember(d => d.LunchMenu, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Lunch.Menu)))
                .ForMember(d => d.LunchNote, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Lunch.Notes)))
                .ForMember(d => d.BeforeWorkoutCalo, opt => opt.MapFrom(s => s.BeforeWorkout.Calo))
                .ForMember(d => d.BeforeWorkoutMenu, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.BeforeWorkout.Menu)))
                .ForMember(d => d.BeforeWorkoutNote, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.BeforeWorkout.Notes)))
                .ForMember(d => d.DinnerCalo, opt => opt.MapFrom(s => s.Dinner.Calo))
                .ForMember(d => d.DinnerMenu, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Dinner.Menu)))
                .ForMember(d => d.DinnerNote, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Dinner.Notes)))
                .ForMember(d => d.ExtraCalo, opt => opt.MapFrom(s => s.Extra.Calo))
                .ForMember(d => d.ExtraMenu, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Extra.Menu)))
                .ForMember(d => d.ExtraNote, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.Extra.Notes)))
                .ForMember(d => d.Note, opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.MealPlanSummarize.Notes)))
                ;

            CreateMap<MealPlanPeriod, MealPlanPeriodDTO>()
                .ForMember(d => d.Breakfast, opt => opt.MapFrom(s => new Meal(MealTitle.Breakfast, s.BreakfastMenu, s.BreakfastNote, s.BreakfastCalo)))
                .ForMember(d => d.Lunch, opt => opt.MapFrom(s => new Meal(MealTitle.Lunch, s.LunchMenu, s.LunchNote, s.LunchCalo)))
                .ForMember(d => d.BeforeWorkout, opt => opt.MapFrom(s => new Meal(MealTitle.BeforeWorkout, s.BeforeWorkoutMenu, s.BeforeWorkoutNote, s.BeforeWorkoutCalo)))
                .ForMember(d => d.Dinner, opt => opt.MapFrom(s => new Meal(MealTitle.Dinner, s.DinnerMenu, s.DinnerNote, s.DinnerCalo)))
                .ForMember(d => d.Extra, opt => opt.MapFrom(s => new Meal(MealTitle.Extra, s.ExtraMenu, s.ExtraNote, s.ExtraCalo)))
                ;
        }
    }
}
