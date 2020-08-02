using ApplicationDomain.Common;
using AspNetCore.Common.Identity;
using AspNetCore.Domain;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;

namespace ApplicationDomain.Identity.Entities
{
    public class User : IdentityUser<int>
    {
		public string Fullname { set; get; }
		public float Height { set; get; }
		public int YearOfBirth { set; get; }
		public Gender Gender { set; get; }
		public DateTime DateJoined { set; get; }
		public string AvatarURL { set; get; }
		public UserStatus Status { set; get; }
	}
}