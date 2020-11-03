using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Requests
{
    public class UserSearchRequest
    {
        public string PhoneNumber { set; get; }
        public string Fullname { set; get; }
    }
}
