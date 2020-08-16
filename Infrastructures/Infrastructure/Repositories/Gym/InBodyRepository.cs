using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Infrastructure.Repositories.Gym
{
    public class InBodyRepository : GenericRepository<InBody, int>, IInBodyRepository
    {
        public InBodyRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable GetMyInBodyByTestedDate(int userId, DateTime? testedDate)
        {
            var query = this.dbSet
                .Include(p => p.User)
                .Where(p => p.UserId == userId && (testedDate == null || p.TestedDate == testedDate))
                .OrderByDescending(p => p.Id);
            return query;
        }
    }
}
