using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.MyInBody
{
    public class MyInBodyRs: InBodyDTO
    {
        public InBodyStandardDTO InBodyStandard { set; get; }
        public IEnumerable<BodyCompositionHistory> BodyCompositionHistories { set; get; }
    }

    public class MyInBodyRsMapper : Profile
    {
        public MyInBodyRsMapper()
        {
            var mapper = CreateMap<InBody, MyInBodyRs>();
        }
    }
}
