using System;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models;
using AspNetCore.Common.Identity;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using AspNetCore.Mvc.JwtBearer;
using ApplicationDomain.Identity.Models.Requests;
using System.Linq;
using ApplicationDomain.Common;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Newtonsoft.Json;

namespace ApplicationDomain.Identity.Services
{
    public class AuthService : ServiceBase, IAuthService
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IJwtTokenService _jwtTokenService;
        public AuthService(
            IMapper mapper,
            IUnitOfWork uow,
            SignInManager<User> signInManager,
            UserManager<User> userManager,
            RoleManager<Role> roleManager,
            IJwtTokenService jwtTokenService
            ) : base(mapper, uow)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
            _roleManager = roleManager;
        }

        public async Task<LoginRs> LoginAsync(LoginRq rq)
        {
            var user = await _userManager.FindByNameAsync(rq.UserName);

            if (user == null)
            {
                return new LoginRs
                {
                    Succeeded = false
                };
            }

            var signInResult = new LoginRs(await _signInManager.CheckPasswordSignInAsync(user, rq.Password, rq.LockoutOnFailure ?? false));
            if (!signInResult.Succeeded)
            {
                return signInResult;
            }
            signInResult.UserAuth = user;
            return signInResult;
        }
        public async Task<bool> ChangePassword(int userId, ChangePasswordRq rq)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());

            if (user == null)
            {
                return false;
            }
            var changePasswordResult = await this._userManager.ChangePasswordAsync(user, rq.CurrentPassword, rq.NewPassword);
            if (changePasswordResult.Succeeded)
            {
                user.TempPassword = null;
                await this._userManager.UpdateAsync(user);
                await this._uow.SaveChangesAsync();
                return true;
            }
            return false;
        }
        public async Task<LoginProfile> LoadProfile(User user)
        {
            LoginProfile profile = new LoginProfile();
            profile.IsNeedToChangePassword = !string.IsNullOrEmpty(user.TempPassword);

            // generate token
            var roles = await _userManager.GetRolesAsync(user);
            var userIdentity = new UserIdentity<int>
            {
                Id = user.Id,
                UserName = user.UserName,
            };
            List<Claim> customClaims = new List<Claim>();
            // grant permission
            Permission permission = new Permission(roles.FirstOrDefault());

            foreach (PropertyInfo propertyInfo in permission.GetType().GetProperties())
            {
                customClaims.Add(new Claim("permissions", JsonConvert.SerializeObject(new PermissionClaim()
                {
                    type = propertyInfo.Name,
                    value = propertyInfo.GetValue(permission).ToString()
                })));
            }
            profile.Token = _jwtTokenService.GenerateLoginToken<int>(userIdentity, roles, customClaims);
            return profile;
        }
    }
}
