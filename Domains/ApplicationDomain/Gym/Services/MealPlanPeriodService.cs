using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using AspNetCore.UnitOfWork;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.Services
{
    public class MealPlanPeriodService : ServiceBase, IMealPlanPeriodService
    {
        private readonly IMealPlanPeriodRepository _mealPlanPeriodRepository;
        public MealPlanPeriodService(
            IMealPlanPeriodRepository mealPlanPeriodRepository,
            IMapper mapper,
            IUnitOfWork uow) : base(mapper, uow)
        {
            this._mealPlanPeriodRepository = mealPlanPeriodRepository;
        }

        public async Task CreateMealPlanPeriod(MealPlanPeriodDTO mealPlanPeriodDTO)
        {
            var mealPlanPeriod = this._mapper.Map<MealPlanPeriod>(mealPlanPeriodDTO);
            this._mealPlanPeriodRepository.Create(mealPlanPeriod);
            //await this._uow.SaveChangesAsync();
        }
    }
}
