using ApplicationDomain.Gym.Entities;
using AspNetCore.UnitOfWork;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IRepositories
{
    public interface IImageRepository : IGenericRepository<Image, int>
    {

    }
}
