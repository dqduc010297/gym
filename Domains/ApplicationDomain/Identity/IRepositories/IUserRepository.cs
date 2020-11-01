using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.Models;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IRepositories
{
    public interface IUserRepository : IGenericRepository<User, int>
    {
        Task<IEnumerable<UserOverviewRs>> GetUserOverview(FilterRq request);
        Task<int> GetUsersSearchByNameOrPhoneCount(string searchTerm);
        Task<IEnumerable<UserDTO>> GetUsers(Expression<Func<User, bool>> predicate, int? skip = null, int? take = null);
    }
}
