using ApplicationDomain.Common;
using ApplicationDomain.Gym.Model.Requests;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Requests
{
    public class UserMentionRq : FilterRq
    {
        [JsonProperty("fullname")]
        public string Fullname { set; get; }
    }
}
