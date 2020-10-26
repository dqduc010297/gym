using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.Models;
using ApplicationDomain.Identity.Models.Requests;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IServices
{
    public interface IAuthService
    {
        Task<LoginRs> LoginAsync(LoginRq rq); 
        Task<bool> ChangePassword(int userId, ChangePasswordRq rq);
        Task<string> GenerateToken(User user);
    }
}
