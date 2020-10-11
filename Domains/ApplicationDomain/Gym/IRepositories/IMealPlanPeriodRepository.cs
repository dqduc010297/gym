using ApplicationDomain.Gym.Entities;
using AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IRepositories
{
    public interface IMealPlanPeriodRepository : IGenericRepository<MealPlanPeriod, int>
    {
        Task<int> FindMaxMealPlanPeriodIndex(int userId);
        IQueryable GetMealPlanPeriodsByUserId(int userId);
    }
}
