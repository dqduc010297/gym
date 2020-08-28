using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;

namespace ApplicationDomain.Gym.Model
{
    public class InBodyRq: BaseInBody
    {
    }

    public class InBodyRqMapper: Profile
    {
        public InBodyRqMapper()
        {
            var mapper = CreateMap<InBodyRq, InBody>();
        }
    }
}
