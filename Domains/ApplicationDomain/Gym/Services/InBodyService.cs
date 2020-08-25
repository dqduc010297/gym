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
    public class InBodyService : ServiceBase, IInBodyService
    {
        private IInBodyRepository _inBodyRepository;
        private readonly UserManager<User> _userManager;
        public InBodyService(
            IInBodyRepository inBodyRepository,
            UserManager<User> userManager,
            IMapper mapper,
            IUnitOfWork uow) : base(mapper, uow)
        {
            this._inBodyRepository = inBodyRepository;
            this._userManager = userManager;
        }
        public async Task<MyInBodyRs> GetMyInbodyByTestedDate(int userId, DateTime? testedDate)
        {
            try
            {
                // load inbody information
                var myInBody = await this._inBodyRepository.GetMyInBodyByTestedDate(userId, testedDate)
                         .MapQueryTo<MyInBodyRs>(this._mapper)
                         .FirstOrDefaultAsync();

                // load body history
                myInBody.BodyCompositionHistories = await this._inBodyRepository.GetMyInBodyByTestedDate(userId, testedDate)
                    .MapQueryTo<BodyCompositionHistory>(this._mapper)
                    .Skip(0).Take(9)
                    .OrderBy(p => p.TestedDate)
                    .ToListAsync();

                return myInBody;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task AddNewInBoy(InBodyRq rq)
        {
            InBody inBody = _mapper.Map<InBody>(rq);
            this._inBodyRepository.Create(inBody);
            await _uow.SaveChangesAsync();
        }
        public async Task UpdateInBody(InBodyRq rq)
        {
            var inBody = await this._inBodyRepository.GetEntityByIdAsync(rq.Id);
            _mapper.Map(rq, inBody);
            this._inBodyRepository.Update(inBody);
            await _uow.SaveChangesAsync();
        }
        public async Task<List<DateTime>> GetTestedDate(int userId)
        {
            return await this._inBodyRepository
                    .GetEntitiesQueryableAsync()
                    .Cast<InBody>()
                    .Where(p => p.UserId == userId)
                    .Select(p => p.TestedDate)
                    .ToListAsync();
        }
        public async Task<List<BodyCompositionHistory>> GetBodyCompositionHistories(int userId)
        {
            return await this._inBodyRepository.GetMyInBodyByTestedDate(userId, null)
                    .MapQueryTo<BodyCompositionHistory>(this._mapper)
                    .OrderByDescending(p => p.TestedDate)
                    .Skip(0).Take(10)
                    .OrderBy(p => p.TestedDate)
                    .ToListAsync();
        }
    }
}
