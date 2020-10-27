using ApplicationDomain.Common;
using System.Collections;
using System.Collections.Generic;

namespace ApplicationDomain.Identity.Models
{
    public class LoginProfile
    {
        public string Token { set; get; }
        public bool IsNeedToChangePassword { set; get; }
    }
}
