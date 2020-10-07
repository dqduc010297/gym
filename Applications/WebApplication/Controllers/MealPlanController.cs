using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class MealPlanController : BaseController
    {
        private readonly IMealPlanPeriodService _mealPlanPeriodService;
        public MealPlanController(IMealPlanPeriodService mealPlanPeriodService)
        {
            this._mealPlanPeriodService = mealPlanPeriodService;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> CreateMealPlanPeriod([FromBody] MealPlanPeriodDTO request)
        {
            await this._mealPlanPeriodService.CreateMealPlanPeriod(request);
            return Ok();
        }
    }
}
