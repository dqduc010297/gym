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

        private async Task<LoginProfile> LoadingProfileAsync(User user)
        {
            LoginProfile loginProfile = new LoginProfile();
            // load base information
            loginProfile.UserName = user.UserName;
            loginProfile.AvatarURL = user.AvatarURL ?? "";
            loginProfile.Height = user.Height;
            loginProfile.Age = DateTime.Now.Year - user.DateOfBirth.Year;
            loginProfile.Gender = user.Gender;

            // generate token
            var roles = await _userManager.GetRolesAsync(user);
            var userIdentity = new UserIdentity<int>
            {
                Id = user.Id,
                UserName = user.UserName,
            };
            loginProfile.Token = _jwtTokenService.GenerateLoginToken<int>(userIdentity, roles);
            return loginProfile;
        }
    }
}
