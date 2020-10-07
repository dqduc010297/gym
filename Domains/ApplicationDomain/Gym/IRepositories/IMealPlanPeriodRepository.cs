using ApplicationDomain.Gym.Entities;
using AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.IRepositories
{
    public interface IMealPlanPeriodRepository : IGenericRepository<MealPlanPeriod, int>
    {
    }
}
