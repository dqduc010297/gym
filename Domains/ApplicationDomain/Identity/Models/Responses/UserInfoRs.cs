using ApplicationDomain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.Responses
{
    public class UserInfoRs
    {
		public int Id { set; get; }
		public string Fullname { set; get; }
		public float Height { set; get; }
		public DateTime DateOfBirth { set; get; }
		public Gender Gender { set; get; }
		public DateTime DateJoined { set; get; }
		public string AvatarURL { set; get; }
		public UserStatus Status { set; get; }
		public string DropboxToken { set; get; }
	}
}
