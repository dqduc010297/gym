using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.Model;
using AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Repositories.Gym
{
    public class MealPlanPeriodRepository : GenericRepository<MealPlanPeriod, int>, IMealPlanPeriodRepository
    {
        public MealPlanPeriodRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<int> FindMaxMealPlanPeriodIndex(int userId)
        {
            return await this.dbSet.Where(p => p.UserId == userId).Select(p => p.Index).DefaultIfEmpty(0).MaxAsync();
        }
        public IQueryable GetMealPlanPeriodsByUserId(int userId)
        {
            return this.dbSet.Where(p => p.UserId == userId);
        }
    }
}
