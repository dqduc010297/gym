using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.Model;
using AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories.Gym
{
    public class ImageRepository : GenericRepository<Image, int>, IImageRepository
    {
        public ImageRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable GetMyImage(int userId)
        {
            return this.dbSet.Where(p => p.CreatedByUserId == userId);
        }

        public IQueryable GetSharedImage(int userId)
        {
            return this.dbSet.Where(p => p.SharedWith != null && JsonConvert.DeserializeObject<List<int>>(p.SharedWith).IndexOf(userId) > 0);
        }
    }
}
