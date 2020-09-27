using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using AutoMapper;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace ApplicationDomain.Gym.Model
{
    public class SharedUser
    {
        public int Id { set; get; }
        public string Fullname { set; get; }
    }
    public class MediaFile
    {
        public int Id { set; get; }
        public string Url { set; get; }
        public bool IsImage { set; get; }
        public IEnumerable<SharedUser> SharedWith { set; get; }
    }

    public class MediaFileMapper : Profile
    {
        public MediaFileMapper()
        {
            CreateMap<AppFile, MediaFile>()
                 .ForMember(
                    d => d.SharedWith,
                    opt => opt.MapFrom(
                        s => JsonConvert.DeserializeObject<List<SharedUser>>(s.SharedWith ?? "[]"))
                    )
                 .ForMember(
                    d => d.IsImage,
                    opt => opt.MapFrom(s => FileExtension.FileExtensionContainImage(s.ContentType))
                    );
            CreateMap<MediaFile, AppFile>()
                .ForMember(
                    d => d.SharedWith,
                    opt => opt.MapFrom(
                        s => JsonConvert.SerializeObject(s.SharedWith ?? new List<SharedUser>()))
                    );
        }
    }
}
