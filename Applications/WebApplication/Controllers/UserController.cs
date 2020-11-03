﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Common;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models;
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
        public async Task<IActionResult> Search(string request)
        {
            UserSearchRequest searchRequest = this.TryToParseRequest<UserSearchRequest>(request);
            return Ok(await this._userService.Search(searchRequest));
        }
        [HttpGet]
        [Route("mention")]
        public async Task<IActionResult> GetUserMention(string fullname)
        {
            return Ok(await this._userService.GetUserMention(fullname));
        }

        [HttpGet]
        [Route("overview")]
        public async Task<IActionResult> GetUserOverview(string request)
        {
            try
            {
                var rq = JsonConvert.DeserializeObject<FilterRq>(request);
                return Ok(await this._userService.GetUserOverviews(rq));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetUserInfo(int id)
        {
            return Ok(await this._userService.GetUserInfo(id));
        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> UpdateUserInfo(int userId, [FromBody] UserDTO user)
        {
            if (await this._userService.UpdateUserInfo(userId, user))
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> CreateUserInfo([FromBody] UserDTO user)
        {
            return Ok(await this._userService.CreatedUser(user));
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> List(string request)
        {
            UserListRequest requestData = this.TryToParseRequest<UserListRequest>(request);
            return Ok(await this._userService.GetUsers(requestData));
        }
    }
}
