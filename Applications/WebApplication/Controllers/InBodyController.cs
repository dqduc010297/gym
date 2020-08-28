using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class InBodyController : BaseController
    {
        private IInBodyService _inBodyService;
        public InBodyController(IInBodyService inBodyService)
        {
            this._inBodyService = inBodyService;
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetMyInBodyByTestedDate(DateTime? testedDate)
        {
            return Ok(await this._inBodyService.GetMyInbodyByTestedDate(this.GetCurrentUserId() ,testedDate));
        }

        [Route("testeddates")]
        [HttpGet]
        public async Task<IActionResult> GetTestedDate()
        {
            return Ok(await this._inBodyService.GetTestedDate(this.GetCurrentUserId()));
        }

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateNewInBody([FromBody]InBodyRq inBodyRq)
        {
            await this._inBodyService.AddNewInBody(inBodyRq);
            return Ok("Inbody");
        }

        [Route("")]
        [HttpPut]
        public async Task<IActionResult> UpdateInBody()
        {
            
            return Ok("Inbody");
        }

        [Route("bodycompositionHistory")]
        [HttpGet]
        public async Task<IActionResult> GetBodyCompositionHistories()
        {
            return Ok(await this._inBodyService.GetBodyCompositionHistories(this.GetCurrentUserId()));
        }
    }
}
