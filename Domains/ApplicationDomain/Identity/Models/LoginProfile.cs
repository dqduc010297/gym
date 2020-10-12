using ApplicationDomain.Common;

namespace ApplicationDomain.Identity.Models
{
    public class LoginProfile
    {
        public string UserName { set; get; }
        public string AvatarURL { set; get; }
        public string Token { set; get; }
        public bool IsNeedToChangePassword { set; get; }
        public int Id { set; get; }
    }
}
