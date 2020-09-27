using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.Requests;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
        public async Task<IActionResult> GetMyInBodyByTestedDate(string myInBodyRq)
        {
            var rq = JsonConvert.DeserializeObject<MyInBodyRq>(myInBodyRq);
            return Ok(await this._inBodyService.GetMyInbodyByTestedDate(this.GetCurrentUserId(), rq));
        }

        [Route("testeddates")]
        [HttpGet]
        public async Task<IActionResult> GetTestedDate()
        {
            return Ok(await this._inBodyService.GetTestedDate(this.GetCurrentUserId()));
        }

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateNewInBody([FromBody] InBodyRq inBodyRq)
        {
            string result = await this._inBodyService.AddNewInBody(inBodyRq);
            return Ok(result);
        }

        [Route("")]
        [HttpPut]
        public async Task<IActionResult> UpdateInBody()
        {
            return Ok("Inbody");
        }

        [Route("bodycompositionHistory")]
        [HttpGet]
        public async Task<IActionResult> GetBodyCompositionHistories(string myInBodyRq)
        {
            var rq = JsonConvert.DeserializeObject<MyInBodyRq>(myInBodyRq);
            return Ok(await this._inBodyService.GetBodyCompositionHistories(this.GetCurrentUserId(), rq));
        }
    }
}
