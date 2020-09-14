using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Models.Responses;
using ApplicationDomain.ThirdParty.Dropbox;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IImageService
    {
        Task<int> StorageImage(string url);
        Task Share(ImageDTO imageDTO);
        Task<ImageRs> GetImage(int userId);
    }
}
