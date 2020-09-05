using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Common;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models.Requests;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApplication.Controllers
{
    public class UserController : BaseController
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet]
        [Route("search")]
        public async Task<IActionResult> GetUserSearch(string searchRq)
        {
            var rq = JsonConvert.DeserializeObject<UserSearchRq>(searchRq);
            return Ok(await this._userService.GetUserSearch(rq));
        }
    }
}
