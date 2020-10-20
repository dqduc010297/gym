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
        public bool IsVideo { set; get; }
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
                    d => d.IsVideo,
                    opt => opt.MapFrom(s => FileExtension.FileExtensonContainVideo(s.ContentType))
                    )
                 .ForMember(
                    d => d.Url,
                    opt => opt.MapFrom(s => $"{s.Url}?raw=1")
                    );
            CreateMap<MediaFile, AppFile>()
                .ForMember(
                    d => d.SharedWith,
                    opt => opt.MapFrom(
                        s => JsonConvert.SerializeObject(s.SharedWith ?? new List<SharedUser>()))
                    )
                .ForMember(
                    d => d.Url,
                    opt => opt.MapFrom(s => s.Url.Replace("?raw=1", ""))
                );
        }
    }
}
