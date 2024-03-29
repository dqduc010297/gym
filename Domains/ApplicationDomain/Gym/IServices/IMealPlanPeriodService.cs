﻿using ApplicationDomain.Gym.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IMealPlanPeriodService
    {
        Task<int> CreateMealPlanPeriod(MealPlanPeriodDTO mealPlanPeriodDTO);
        Task UpdateMealPlanPeriod(MealPlanPeriodDTO mealPlanPeriodDTO);
        Task<IEnumerable<MealPlanPeriodDTO>> GetMealPlanPeriods(int userId);
    }
}
