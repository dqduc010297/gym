using ApplicationDomain.Common;
using AspNetCore.Common.Identity;
using AspNetCore.Domain;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;

namespace ApplicationDomain.Identity.Entities
{
    public class User : IdentityUser<int>, IEntity<int>
    {
		public string Fullname { set; get; }
		public DateTime DateOfBirth { set; get; }
		public Gender Gender { set; get; }
		public DateTime DateJoined { set; get; }
		public string AvatarURL { set; get; }
		public UserStatus Status { set; get; }
		public string DropboxToken { set; get; }
		public string TempPassword { set; get; }
		public string SearchName { set; get; }
		public string HomeScreen { set; get; }
	}
}