using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.IRepositories;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.Services
{
    public class UserService : ServiceBase, IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly IUserRepository _userRepository;
        public UserService(
            IMapper mapper,
            IUnitOfWork uow,
            UserManager<User> userManager,
            IUserRepository userRepository
            ) : base(mapper, uow)
        {
            _userManager = userManager;
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<UserSearchRs>> GetUserSearch(UserSearchRq searchRq)
        {
            List<UserSearchRs> userSearches = new List<UserSearchRs>();
            var users = await this._userManager.GetUsersInRoleAsync(searchRq.RoleName.ToString());
            users.Where(p => p.PhoneNumber.Contains(searchRq.PhoneNumber) || p.Fullname.Contains(searchRq.Fullname))
                .Skip(searchRq.Skip).Take(searchRq.Take)
                .ToList()
                .ForEach(u => userSearches.Add(new UserSearchRs()
                {
                    Fullname = u.Fullname,
                    PhoneNumber = u.PhoneNumber,
                    Id = u.Id
                }));
            return userSearches;
        }

        public async Task<IEnumerable<UserOverviewRs>> GetUserOverviews(FilterRq request)
        {
            return await this._userRepository.GetUserOverview(request);
        }
    }
}