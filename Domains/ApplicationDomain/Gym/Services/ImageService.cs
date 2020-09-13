using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using ApplicationDomain.Gym.Model.Requests;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
