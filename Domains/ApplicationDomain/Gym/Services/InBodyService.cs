using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using ApplicationDomain.Gym.Model.Requests;
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
        public async Task<MyInBodyRs> GetMyInbodyByTestedDate(int userId, MyInBodyRq rq)
        {
            // load inbody information
            var myInBody = await this._inBodyRepository.GetMyInBodyByTestedDate(userId, rq.TestedDate)
                     .MapQueryTo<MyInBodyRs>(this._mapper)
                     .FirstOrDefaultAsync();

            // load body history
            myInBody.BodyCompositionHistories = await this.GetBodyCompositionHistories(userId, rq);

            return myInBody;
        }
        public async Task AddNewInBody(InBodyRq rq)
        {
            try
            {
                InBody inBody = _mapper.Map<InBody>(rq);
                //this._inBodyRepository.Create(inBody);
                //await _uow.SaveChangesAsync();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task UpdateInBody(InBodyRq rq)
        {
            //var inBody = await this._inBodyRepository.GetEntityByIdAsync(rq.Id);
            //_mapper.Map(rq, inBody);
            //this._inBodyRepository.Update(inBody);
            //await _uow.SaveChangesAsync();
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
        public async Task<List<BodyCompositionHistory>> GetBodyCompositionHistories(int userId, MyInBodyRq rq)
        {
            return await this._inBodyRepository.GetMyInBodyByTestedDate(userId, rq.TestedDate)
                .MapQueryTo<BodyCompositionHistory>(this._mapper)
                .Skip(rq.Skip).Take(rq.Take)
                .OrderBy(p => p.TestedDate)
                .ToListAsync();
        }
    }
}
