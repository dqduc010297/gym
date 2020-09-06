using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using ApplicationDomain.Identity.Entities;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.Services
{
    public class InBodyStandardService : ServiceBase, IInBodyStandardService
    {
        private IInBodyStandardRepository _inBodyStandardRepository;
        public InBodyStandardService(
            IInBodyStandardRepository inBodyStandardRepository,
            IMapper mapper,
            IUnitOfWork uow) : base(mapper, uow)
        {
            this._inBodyStandardRepository = inBodyStandardRepository;
        }

        public async Task<bool> CheckDiff(Entities.InBodyStandard inBodyStandard)
        {
            InBodyStandard entity = await this._inBodyStandardRepository.GetEntityByIdAsync(inBodyStandard.Id);
            if (entity == null)
            {
                return true;
            }
            if (entity.BodyWaterMax != inBodyStandard.BodyWaterMax || entity.BodyWaterMin != inBodyStandard.BodyWaterMin)
                return true;
            if (entity.ProteinMax != inBodyStandard.ProteinMax || entity.ProteinMin != inBodyStandard.ProteinMin)
                return true;
            if (entity.MineralMax != inBodyStandard.MineralMax || entity.MineralMin != inBodyStandard.MineralMin)
                return true;
            if (entity.BodyFatMassMax != inBodyStandard.BodyFatMassMax || entity.BodyFatMassMin != inBodyStandard.BodyFatMassMin)
                return true;
            if (entity.SkeletalMuscleMassMax != inBodyStandard.SkeletalMuscleMassMax || entity.SkeletalMuscleMassMin != inBodyStandard.SkeletalMuscleMassMin)
                return true;
            if (entity.WeightMax != inBodyStandard.WeightMax || entity.WeightMin != inBodyStandard.WeightMin)
                return true;
            return false;
        }

        public async Task<InBodyStandardDTO> GetLatestInBodyStandard(int userId)
        {
            try
            {

                var result = await this._inBodyStandardRepository.GetLatestInBodyStandard(userId)
                    .MapQueryTo<InBodyStandardDTO>(this._mapper)
                    .FirstOrDefaultAsync();
                return result ?? new InBodyStandardDTO();
            }catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> CreateInBodyStandard(InBodyStandard entity)
        {
            entity.Id = 0;
            this._inBodyStandardRepository.Create(entity);
            await this._uow.SaveChangesAsync();
            return entity.Id;
        }
    }
}
