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
    public class InBodyStandardRepository : GenericRepository<InBodyStandard, int>, IInBodyStandardRepository
    {
        public InBodyStandardRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable GetLatestInBodyStandard(int userId)
        {
            var query = this.dbSet
                .Include(p => p.User)
                .Where(p => p.UserId == userId)
                .OrderByDescending(p => p.Id);
            return query;
        }
    }
}
