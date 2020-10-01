using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using ApplicationDomain.Gym.Model.Requests;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
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
        private IInBodyStandardRepository _inBodyStandardRepository;
        private IInBodyStandardService _inBodyStandardService;

        public InBodyService(
            IInBodyRepository inBodyRepository,
            IInBodyStandardService inBodyStandardService,
            IInBodyStandardRepository inBodyStandardRepository,
            IMapper mapper,
            IUnitOfWork uow) : base(mapper, uow)
        {
            this._inBodyRepository = inBodyRepository;
            this._inBodyStandardService = inBodyStandardService;
            this._inBodyStandardRepository = inBodyStandardRepository;
        }
        public async Task<MyInBodyRs> GetMyInbodyByTestedDate(int userId, MyInBodyRq rq)
        {
            try
            {

                // load inbody information
                var myInBody = await this._inBodyRepository.GetMyInBodyByTestedDate(userId, rq.TestedDate)
                         .MapQueryTo<MyInBodyRs>(this._mapper)
                         .FirstOrDefaultAsync();
                if (myInBody != null)
                {
                    // load body history
                    myInBody.BodyCompositionHistories = await this.GetBodyCompositionHistories(userId, rq);
                }
                return myInBody;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<string> AddNewInBody(InBodyRq rq)
        {
            try
            {
                InBodyStandard standard = _mapper.Map<InBodyStandard>(rq.InBodyStandard);
                //InBody inBody = _mapper.Map<InBody>(rq);
                var isDiff = await this._inBodyStandardService.CheckDiff(standard);
                if (isDiff)
                {
                    int newInBodyStandardId = await this._inBodyStandardService.CreateInBodyStandard(standard);
                    //inBody.InBodyStandardId = newInBodyStandardId;
                }
                //this._inBodyRepository.Create(inBody);
                //await _uow.SaveChangesAsync();
                return isDiff.ToString();
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
        public async Task<IEnumerable<BodyCompositionHistory>> GetBodyCompositionHistories(int userId, MyInBodyRq rq)
        {
            List<BodyCompositionHistory> result = await this._inBodyRepository.GetMyInBodyByTestedDate(userId, rq.TestedDate)
                .MapQueryTo<BodyCompositionHistory>(this._mapper)
                .Skip(rq.Skip).Take(rq.Take)
                .OrderBy(p => p.TestedDate)
                .ToListAsync();
            return result;
        }
    }
}
