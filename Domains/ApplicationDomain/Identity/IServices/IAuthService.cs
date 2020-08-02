using ApplicationDomain.Identity.Models;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.IServices
{
    public interface IAuthService
    {
        Task<LoginRs> LoginAsync(LoginRq rq);
    }
}
