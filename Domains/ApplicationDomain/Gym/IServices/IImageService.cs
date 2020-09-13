using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IImageService
    {
        Task<int> StorageImage(string url, int userId);
    }
}
