using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.Mvc.JwtBearer;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.Services
{
    public class UserService : ServiceBase, IUserService
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IJwtTokenService _jwtTokenService;
        public UserService(
            IMapper mapper,
            IUnitOfWork uow,
            SignInManager<User> signInManager,
            UserManager<User> userManager,
            IJwtTokenService jwtTokenService
            ) : base(mapper, uow)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
        }

        public async Task<IEnumerable<UserSearchRs>> GetUserSearch(UserSearchRq searchRq)
        {
            List<UserSearchRs> userSearches = new List<UserSearchRs>();
            var users = await this._userManager.GetUsersInRoleAsync(searchRq.RoleName.ToString());
            users.Where(p => p.PhoneNumber.Contains(searchRq.PhoneNumber))
                .Skip(searchRq.Skip).Take(searchRq.Take)
                .ToList()
                .ForEach(u => userSearches.Add(new UserSearchRs() { 
                Fullname = u.Fullname,
                PhoneNumber = u.PhoneNumber
            }));
            return userSearches;
        }
    }
}