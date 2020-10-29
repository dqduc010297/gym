using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.IRepositories;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories.Identity
{
    public class UserRepository : GenericRepository<User, int>, IUserRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<User> _userManager;
        public UserRepository(ApplicationDbContext dbContext, UserManager<User> userManager) : base(dbContext)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public async Task<IEnumerable<UserOverviewRs>> GetUserOverview(FilterRq request)
        {
            var query = await (from uRole in _dbContext.UserRoles
                               from user in _userManager.Users
                               from role in _dbContext.Roles
                               where uRole.UserId == user.Id && role.Id == uRole.RoleId
                               select new UserOverviewRs
                               {
                                   Id = user.Id,
                                   PhoneNumber = user.PhoneNumber,
                                   UserRoleName = role.Name,
                                   Avatar = user.AvatarURL ?? "",
                                   Fullname = user.Fullname,
                               })
                         .Skip(request.Skip).Take(request.Take)
                         .ToListAsync();
            return query;
        }

        public IQueryable GetUsersSearchByNameOrPhone(UserSearchRq searchRq)
        {
            var query = _userManager.Users
                .Where(p => p.SearchName.Contains(StringUtil.GenerateSearchString(searchRq.Fullname))
                || p.PhoneNumber.Contains(searchRq.PhoneNumber));
                //.Skip(searchRq.Skip).Take(searchRq.Take);

            return query;
        }
    }
}
