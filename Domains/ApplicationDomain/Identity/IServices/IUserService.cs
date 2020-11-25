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
        Task<IEnumerable<UserSearchResponse>> Search(UserSearchRequest request);
        Task<IEnumerable<UserMentionRs>> GetUserMention(string fullname);
        Task<IEnumerable<UserOverviewRs>> GetUserOverviews(FilterRq request);
        Task<UserDTO> GetUser(int userId);
        Task<bool> UpdateUser(int userId, UserDTO updatedUser);
        Task<int> CreatedUser(UserDTO createdUser);
        Task<PaginationResponse<UserDTO>> GetUsers(UserListRequest request);
        Task UpdateHomeScreen(int userId, string newUrl);
        Task<string> GetHomeScreen(int userId);
    }
}
