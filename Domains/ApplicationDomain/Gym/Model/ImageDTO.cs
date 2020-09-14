using ApplicationDomain.Gym.Entities;
using AutoMapper;
using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;

namespace ApplicationDomain.Gym.Model
{
    public class SharedUser
    {
        public int Id { set; get; }
        public string Fullname { set; get; }
    }
    public class ImageDTO
    {
        public int Id { set; get; }
        public string Url { set; get; }
        public IEnumerable<SharedUser> SharedWith { set; get; }
    }

    public class ImageDTOMapper : Profile
    {
        public ImageDTOMapper()
        {
            CreateMap<ImageDTO, Image>().ForMember(
                d => d.SharedWith,
                opt => opt.MapFrom(s => JsonConvert.SerializeObject(s.SharedWith ?? new List<SharedUser>())));
            CreateMap<Image, ImageDTO>().ForMember(
                d => d.SharedWith,
                opt => opt.MapFrom(s => JsonConvert.DeserializeObject<List<SharedUser>>(s.SharedWith ?? "[]")));
        }
    }
}
