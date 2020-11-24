using ApplicationDomain.Gym.Entities;
using AspNetCore.UnitOfWork;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IRepositories
{
    public interface IInBodyRepository : IGenericRepository<InBody, int>
    {
        IQueryable GetMyInBodyByTestedDate(int userId, DateTime? testedDate);
        IQueryable GetMyInBodyHistory(int userId);
        IQueryable GetMyInBodySummarize(int userId);
    }
}
