﻿using ApplicationDomain.Common;
using System.Collections;
using System.Collections.Generic;

namespace ApplicationDomain.Identity.Models
{
    public class LoginProfile
    {
        public string UserName { set; get; }
        public string AvatarURL { set; get; }
        public string Token { set; get; }
        public bool IsNeedToChangePassword { set; get; }
        public int Id { set; get; }
        public Permission Permission { set; get; }
    }
}
