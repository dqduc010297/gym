using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.Model;
using AspNetCore.UnitOfWork.EntityFramework;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace Infrastructure.Repositories.Gym
{
    public class MealPlanPeriodRepository : GenericRepository<MealPlanPeriod, int>, IMealPlanPeriodRepository
    {
        public MealPlanPeriodRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
