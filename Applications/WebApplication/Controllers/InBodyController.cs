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
            return Ok(await this._inBodyService.GetMyInbodyByTestedDate(int.Parse(this.GetCurrentUserId()) ,testedDate));
        }
        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateNewInBody()
        {
            await this._inBodyService.AddNewInBoy(new InBodyRq()
            {
                TestedDate = DateTime.Now,
                BodyWater = (float)44.8,
                Protein = (float)12.2,
                Mineral = (float)4.24,
                BodyFatMass = (float)27.8,
                Weight = (float)89.0,
                SkeletalMuscleMass = (float)34.9,
                Score = 70,
                WaistHipRatio = (float)0.95,
                VisceralFatLevel = 11,
                UserId = 1,
            });
            return Ok("Inbody");
        }

        [Route("")]
        [HttpPut]
        public async Task<IActionResult> UpdateInBody()
        {
            await this._inBodyService.UpdateInBody(new InBodyRq()
            {
                Id = 18,
                TestedDate = DateTime.Now,
                BodyWater = (float)44.8,
                Protein = (float)12.2,
                Mineral = (float)4.24,
                BodyFatMass = (float)27.8,
                Weight = (float)89.0,
                SkeletalMuscleMass = (float)34.9,
                Score = 70,
                WaistHipRatio = (float)0.95,
                VisceralFatLevel = 10,
                UserId = 1,
            });
            return Ok("Inbody");
        }
    }
}
