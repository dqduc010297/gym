using System;
using System.Threading.Tasks;
using ApplicationDomain.Common;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Identity.Entities;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class InBodyStandardController : BaseController
    {
        private IInBodyStandardService _inBodyStandardService;
        public InBodyStandardController(IInBodyStandardService inBodyStandardService)
        {
            this._inBodyStandardService = inBodyStandardService;
        }

        [Route("latest")]
        [HttpGet]
        public async Task<IActionResult> GetLatestInBodyStandard(int? userId)
        {
            return Ok(await this._inBodyStandardService.GetLatestInBodyStandard((int)userId));
        }
    }
}
