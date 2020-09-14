using ApplicationDomain.Gym.Entities;
using AutoMapper;
using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;

namespace ApplicationDomain.Gym.Model
{
    public class ImageDTO
    {
        public int Id { set; get; }
        public string Url { set; get; }
        public IEnumerable<int> SharedWith { set; get; }
    }

    public class ImageDTOMapper : Profile
    {
        public ImageDTOMapper()
        {
            CreateMap<ImageDTO, Image>()
                .ForMember(d => d.SharedWith, opt => opt.MapFrom(s => s.SharedWith != null ? JsonConvert.SerializeObject(s.SharedWith) : null));
            CreateMap<Image, ImageDTO>()
                .ForMember(d => d.SharedWith, opt => opt.MapFrom(s => s.SharedWith != null ? JsonConvert.DeserializeObject<List<int>>(s.SharedWith) : null));
        }
    }
}
