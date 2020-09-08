using ApplicationDomain.Common;
using ApplicationDomain.Identity.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Responses
{
    public class UserOverviewRs
    {
        public int Id { set; get; }
        public string UserRoleName { set; get; }
        public string Fullname { set; get; }
        public string Avatar { set; get; }
        public string PhoneNumber { set; get; }
    }

    public class UserOverviewRsMapper: Profile
    {
        public UserOverviewRsMapper()
        {
            CreateMap<User, UserOverviewRs>();
        }
    }
}
