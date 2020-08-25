using ApplicationDomain.Common;

namespace ApplicationDomain.Identity.Models
{
    public class LoginProfile
    {
        public string UserName { set; get; }
        public string AvatarURL { set; get; }
        public string Token { set; get; }
        public float Height { set; get; }
        public int Age { set; get; }
        public Gender Gender { set; get; }
    }
}
