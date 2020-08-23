using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IInBodyService
    {
        Task<MyInBodyRs> GetMyInbodyByTestedDate(int userId, DateTime? testedDate);
        Task AddNewInBoy(InBodyRq rq);
        Task UpdateInBody(InBodyRq rq);
        Task<List<DateTime>> GetTestedDate(int userId);
        Task<List<BodyCompositionHistory>> GetBodyCompositionHistories(int userId);
    }
}
