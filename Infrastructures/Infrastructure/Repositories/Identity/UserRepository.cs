using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.IRepositories;
using ApplicationDomain.Identity.Models;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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
                                   Avatar = user.AvatarURL == null ? "" : $"{user.AvatarURL}?raw=1",
                                   Fullname = user.Fullname,
                               })
                         .Skip(request.Skip).Take(request.Take)
                         .ToListAsync();
            return query;
        }
        public async Task<int> GetUsersSearchByNameOrPhoneCount(string searchTerm)
        {
            var query = await _userManager.Users.AsNoTracking()
              .Where(p => p.SearchName.Contains(StringUtil.GenerateSearchString(searchTerm))
              || p.PhoneNumber.Contains(searchTerm))
              .CountAsync();

            return query;
        }
        public async Task<IEnumerable<UserDTO>> GetUsers(Expression<Func<User, bool>> predicate, int? skip = null, int? take = null)
        {
            var query = (from uRole in _dbContext.UserRoles
                         from user in _userManager.Users
                         .Where(predicate)
                         from role in _dbContext.Roles
                         where uRole.UserId == user.Id && role.Id == uRole.RoleId
                         select new UserDTO
                         {
                             Id = user.Id,
                             Fullname = user.Fullname,
                             DateOfBirth = user.DateOfBirth,
                             Gender = user.Gender,
                             DateJoined = user.DateJoined,
                             AvatarURL = user.AvatarURL == null ? "" : $"{user.AvatarURL}?raw=1",
                             Status = user.Status,
                             DropboxToken = user.DropboxToken,
                             PhoneNumber = user.PhoneNumber,
                             Email = user.Email,
                             TempPassword = user.Status == UserStatus.DEACTIVATE ? user.TempPassword : "",
                             RoleName = role.Name
                         })
                         .OrderByDescending(p => p.Id);
            if (skip != null && take != null)
            {
                return await query.Skip((int)skip).Take((int)take).ToListAsync();
            }
            return await query.ToListAsync();
        }
    }
}
