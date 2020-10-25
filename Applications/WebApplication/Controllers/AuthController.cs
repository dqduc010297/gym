using System;
using System.Threading.Tasks;
using ApplicationDomain.Common;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models;
using ApplicationDomain.Identity.Models.Requests;
using AspNetCore.Mvc;
using AspNetCore.Mvc.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace WebApplication.Controllers
{
    [AllowAnonymous]
    public class AuthController : BaseController
    {
        private readonly IJwtTokenService _jwtTokenService;
        private readonly IAuthService _authService;
        private readonly IOptions<IdentityOptions> _identityOptions;
        private readonly IUserService _userService;
        public AuthController(
            IJwtTokenService jwtTokenService,
            IAuthService authService,
            IOptions<IdentityOptions> identityOptions,
            IUserService userService
            )
        {
            _jwtTokenService = jwtTokenService;
            _authService = authService;
            _identityOptions = identityOptions;
            _userService = userService;
        }

        [Route("test")]
        public async Task<IActionResult> Test()
        {
            try
            {

                var result = await this._userService.GetUserSearch(
                    new UserSearchRq()
                    {
                        Fullname = "",
                        PhoneNumber = "0355",
                        Skip = 0,
                        Take = 10
                    });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRq loginRq)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var result = await _authService.LoginAsync(loginRq);

                if (result.Succeeded)
                {
                    return Ok(result.LoginProfile);
                }

                if (result.IsLockedOut)
                {
                    return BadRequest($"User account locked out, max failed access attemps are {_identityOptions.Value.Lockout.MaxFailedAccessAttempts}");
                }
                else if (result.IsNotAllowed)
                {
                    return BadRequest("User account is not allowed, make sure your account have been verified");
                }
                else if (result.RequiresTwoFactor)
                {
                    return BadRequest("Two Factor Login is required");
                }

                return BadRequest("User Name or Password does not match");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("change-password")]
        [HttpPut]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRq changePasswordRq)
        {
            return Ok(await this._authService.ChangePassword(this.GetCurrentUserId(), changePasswordRq));
        }
    }
}
