using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IRepositories
{
    public interface IUserRepository : IGenericRepository<User, int>
    {
        Task<IEnumerable<UserOverviewRs>> GetUserOverview(FilterRq request);
        IQueryable GetUsersSearchByNameOrPhone(UserSearchRq searchRq);
    }
}
