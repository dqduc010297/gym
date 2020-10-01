using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using ApplicationDomain.Gym.Model.Requests;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IInBodyService
    {
        Task<MyInBodyRs> GetMyInbodyByTestedDate(int userId, MyInBodyRq rq);
        Task<string> AddNewInBody(InBodyRq rq);
        Task UpdateInBody(InBodyRq rq);
        Task<List<DateTime>> GetTestedDate(int userId);
        Task<IEnumerable<BodyCompositionHistory>> GetBodyCompositionHistories(int userId, MyInBodyRq rq);
    }
}
