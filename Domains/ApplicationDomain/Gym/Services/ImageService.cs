using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Models.Responses;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
        public async Task<int> StorageImage(string url)
        {
            Image image = new Image()
            {
                Url = url
            };
            this._imageRepository.Create(image);
            await this._uow.SaveChangesAsync();
            return image.Id;
        }

        public async Task Share(ImageDTO imageDTO)
        {
            Image image = await this._imageRepository.GetEntityByIdAsync(imageDTO.Id);
            this._mapper.Map(imageDTO, image);
            this._imageRepository.Update(image);
            await this._uow.SaveChangesAsync();
        }

        public async Task<ImageRs> GetImage(int userId)
        {
            ImageRs imageRs = new ImageRs();
            imageRs.MyImages = await this._imageRepository.GetMyImage(userId).MapQueryTo<ImageDTO>(this._mapper).ToListAsync();
            imageRs.SharedImage = await this._imageRepository.GetSharedImage(userId).MapQueryTo<ImageDTO>(this._mapper).ToListAsync();
            return imageRs;
        }
    }
}
