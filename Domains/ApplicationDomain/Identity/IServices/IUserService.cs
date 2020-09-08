using ApplicationDomain.Common;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IServices
{
    public interface IUserService
    {
        Task<IEnumerable<UserSearchRs>> GetUserSearch(UserSearchRq searchRq);
        Task<IEnumerable<UserOverviewRs>> GetUserOverviews(FilterRq request);
    }
}
