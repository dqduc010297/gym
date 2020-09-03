using ApplicationDomain.Common;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IServices
{
    public interface IUserService
    {
        Task<IEnumerable<UserSearchRs>> GetUserSearch(UserSearchRq searchRq);
    }
}
