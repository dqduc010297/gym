using ApplicationDomain.Common;
using ApplicationDomain.Gym.Model.Responses;
using ApplicationDomain.Identity.Models;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IServices
{
    public interface IUserService
    {
        Task<IEnumerable<UserSearchRs>> GetUserSearch(UserSearchRq searchRq);
        Task<IEnumerable<UserMentionRs>> GetUserMention(string fullname);
        Task<IEnumerable<UserOverviewRs>> GetUserOverviews(FilterRq request);
        Task<UserDTO> GetUserInfo(int userId);
        Task<bool> UpdateUserInfo(int userId, UserDTO updatedUser);
        Task<int> CreatedUser(UserDTO createdUser);
    }
}
