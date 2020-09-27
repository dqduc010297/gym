using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.Responses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IAppFileService
    {
        Task<int> Storage(string url, string contentType);
        Task<AlbumRs> GetAlbum(int userId);
        Task ShareMediaFile(MediaFile sharedFile);
    }
}
