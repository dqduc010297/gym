using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.ThirdParty.Dropbox;
using AspNetCore.UnitOfWork;
using AutoMapper;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.Services
{
    public class ImageService : ServiceBase, IImageService
    {
        private IImageRepository _imageRepository;

        public ImageService(
            IImageRepository imageRepository,
            IMapper mapper,
            IUnitOfWork uow) : base(mapper, uow)
        {
            this._imageRepository = imageRepository;
        }
        public async Task<int> StorageImage(string url, int userId)
        {
            Image image = new Image()
            {
                Url = url,
                UserId = userId
            };
            this._imageRepository.Create(image);
            await this._uow.SaveChangesAsync();
            return image.Id;
        }

        public async Task Share(SharedImageRq sharedImageRq)
        {
            Image image = await this._imageRepository.GetEntityByIdAsync(sharedImageRq.ImageId);
            image.SharedWith = sharedImageRq.SharedWith;
            this._imageRepository.Update(image);
            await this._uow.SaveChangesAsync();
        }
    }
}
