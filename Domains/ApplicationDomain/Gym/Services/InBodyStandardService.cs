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

        public async Task<InBodyStandardRs> GetLatestInBodyStandard(int userId)
        {
            var result =  await this._inBodyStandardRepository.GetLatestInBodyStandard(userId)
                .MapQueryTo<InBodyStandardRs>(this._mapper)
                .FirstOrDefaultAsync();
            return result ?? new InBodyStandardRs();
        }
    }
}
