using ApplicationDomain.Common;
using ApplicationDomain.Gym.Model.Requests;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Requests
{
    public class UserSearchRq : FilterRq
    {
        [JsonProperty("phoneNumber")]
        public string PhoneNumber { set; get; }
        [JsonProperty("fullname")]
        public string Fullname { set; get; }
    }
}
