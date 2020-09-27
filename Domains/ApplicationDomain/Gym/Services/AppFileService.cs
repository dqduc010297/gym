using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.Responses;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.Services
{
    public class AppFileService : ServiceBase, IAppFileService
    {
        private readonly IAppFileRepository _appFileRepository;
        public AppFileService(
            IAppFileRepository appFileRepository,
            IMapper mapper,
            IUnitOfWork uow) : base(mapper, uow)
        {
            this._appFileRepository = appFileRepository;
        }

        public async Task<AlbumRs> GetAlbum(int userId)
        {
            AlbumRs albumRs = new AlbumRs();
            albumRs.MyMediaFiles = await this._appFileRepository.GetMyMediaFile(userId).MapQueryTo<MediaFile>(this._mapper).ToListAsync();
            albumRs.SharedMediaFiles = await this._appFileRepository.GetSharedMediaFile(userId).MapQueryTo<MediaFile>(this._mapper).ToListAsync();
            return albumRs;
        }

        public async Task<int> Storage(string url, string contentType)
        {
            AppFile appFile = new AppFile()
            {
                ContentType = contentType,
                Url = url,
            };
            
            this._appFileRepository.Create(appFile);
            await this._uow.SaveChangesAsync();
            return appFile.Id;
        }
    }
}
