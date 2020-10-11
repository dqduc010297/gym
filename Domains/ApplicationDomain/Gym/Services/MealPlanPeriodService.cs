using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<int> CreateMealPlanPeriod(MealPlanPeriodDTO mealPlanPeriodDTO)
        {
            var mealPlanPeriod = this._mapper.Map<MealPlanPeriod>(mealPlanPeriodDTO);
            mealPlanPeriod.Index = await this._mealPlanPeriodRepository.FindMaxMealPlanPeriodIndex(mealPlanPeriod.UserId) + 1;
            this._mealPlanPeriodRepository.Create(mealPlanPeriod);
            await this._uow.SaveChangesAsync();
            return mealPlanPeriod.Id;
        }

        public async Task<IEnumerable<MealPlanPeriodDTO>> GetMealPlanPeriods(int userId)
        {
                var mealPlanPeriodDTOs = await this._mealPlanPeriodRepository
                    .GetMealPlanPeriodsByUserId(userId)
                    .MapQueryTo<MealPlanPeriodDTO>(this._mapper)
                    .ToListAsync();
                return mealPlanPeriodDTOs;
        }
    }
}
