using ApplicationDomain.Gym.Model.MyInBody;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IInBodyStandardService
    {
        Task<InBodyStandardRs> GetLatestInBodyStandard(int userId);
    }
}
