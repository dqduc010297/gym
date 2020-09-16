using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Requests
{
    public class ChangePasswordRq
    {
        public string CurrentPassword { set; get; }
        public string NewPassword { set; get; }
    }
}
