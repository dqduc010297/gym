using ApplicationDomain.ThirdParty.Dropbox;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IImageService
    {
        Task<int> StorageImage(string url, int userId);
        Task Share(SharedImageRq sharedImageRq);
    }
}
