using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;

namespace ApplicationDomain.Gym.Model
{
    public class InBodyRq : BaseInBody
    {
        public InBodyDTO InBody { set; get; }
        public InBodyStandardDTO InBodyStandard { set; get; }
    }

    public class InBodyRqMapper : Profile
    {
        public InBodyRqMapper()
        {
            CreateMap<InBodyStandardDTO, InBodyStandard>();
        }
    }
}
