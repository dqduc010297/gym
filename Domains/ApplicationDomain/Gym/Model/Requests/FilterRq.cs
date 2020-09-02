using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.Requests
{
    public abstract class FilterRq
    {
        [JsonProperty("take")]
        public int Take { set; get; }
        [JsonProperty("skip")]
        public int Skip { set; get; }
    }
}
