﻿using System.Threading.Tasks;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models;
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
        public AuthController(
            IJwtTokenService jwtTokenService,
            IAuthService authService,
            IOptions<IdentityOptions> identityOptions
            )
        {
            _jwtTokenService = jwtTokenService;
            _authService = authService;
            _identityOptions = identityOptions;
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRq loginRq)
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
    }
}
