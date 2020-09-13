using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models
{
    public class UserDTO
    {
        public int Id { set; get; }
        public string Fullname { set; get; }
        public DateTime DateOfBirth { set; get; }
        public Gender Gender { set; get; }
        public DateTime DateJoined { set; get; }
        public string AvatarURL { set; get; }
        public UserStatus Status { set; get; }
        public string DropboxToken { set; get; }
        public string PhoneNumber { set; get; }
        public string Email { set; get; }
        public string TempPassword { set; get; }
    }

    public class UserDTOMapper : Profile
    {
        public UserDTOMapper()
        {
            CreateMap<UserDTO, User>()
                .ForMember(d => d.UserName, opt => opt.MapFrom(s => s.PhoneNumber));
            CreateMap<User, UserDTO>()
                .ForMember(d => d.AvatarURL, opt => opt.MapFrom(s => s.AvatarURL == null ? AppSettingCommon.GetVariable("DefaultAvatarURL") : s.AvatarURL))
                .ForMember(d => d.TempPassword, opt => opt.MapFrom(s => s.Status == UserStatus.DEACTIVATE ? s.TempPassword : ""));
        }
    }
}
