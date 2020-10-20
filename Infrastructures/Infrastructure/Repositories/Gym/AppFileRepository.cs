using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.Model;
using AspNetCore.UnitOfWork.EntityFramework;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace Infrastructure.Repositories.Gym
{
    public class AppFileRepository : GenericRepository<AppFile, int>, IAppFileRepository
    {
        public AppFileRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        private bool CheckUserInJson(string json, int userId)
        {
            var sharedUsers = JsonConvert.DeserializeObject<List<SharedUser>>(json);
            for (int i = 0; i < sharedUsers.Count; i++)
            {
                if (sharedUsers[i].Id == userId)
                {
                    return true;
                }
            }
            return false;
        }
        public IQueryable GetMyMediaFile(int userId)
        {
            return this.dbSet.Where(p => p.CreatedByUserId == userId).OrderByDescending(p => p.Id);
        }

        public IQueryable GetSharedMediaFile(int userId)
        {
            return this.dbSet
            .Where(p => p.SharedWith != null && this.CheckUserInJson(p.SharedWith, userId))
            .OrderByDescending(p => p.Id);
        }
    }
}
