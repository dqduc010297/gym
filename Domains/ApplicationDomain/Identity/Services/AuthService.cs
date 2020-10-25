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

namespace ApplicationDomain.Identity.Services
{
    public class AuthService : ServiceBase, IAuthService
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IJwtTokenService _jwtTokenService;
        public AuthService(
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
            signInResult.LoginProfile = await LoadingProfileAsync(user);
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
        private async Task<LoginProfile> LoadingProfileAsync(User user)
        {
            LoginProfile loginProfile = new LoginProfile();
            // load base information
            loginProfile.UserName = user.UserName;
            loginProfile.AvatarURL = user.AvatarURL ?? "";
            loginProfile.Id = user.Id;

            // generate token
            var roles = await _userManager.GetRolesAsync(user);
            var userIdentity = new UserIdentity<int>
            {
                Id = user.Id,
                UserName = user.UserName,
            };
            loginProfile.Token = _jwtTokenService.GenerateLoginToken<int>(userIdentity, roles);
            loginProfile.Permission = new Permission(roles.FirstOrDefault());
            if (user.TempPassword != null)
            {
                loginProfile.IsNeedToChangePassword = true;
                return loginProfile;
            }
            return loginProfile;
        }


    }
}
