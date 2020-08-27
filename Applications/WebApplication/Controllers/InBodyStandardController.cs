using System;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
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
        public async Task<IActionResult> GetLatestInBodyStandard()
        {
            return Ok(await this._inBodyStandardService.GetLatestInBodyStandard(this.GetCurrentUserId()));
        }
    }
}
