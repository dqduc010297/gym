using ApplicationDomain.Common;
using Newtonsoft.Json;
using System;

namespace ApplicationDomain.Gym.Model.Requests
{
    public class MyInBodyRq : FilterRq
    {
        [JsonProperty("testedDate")]
        public DateTime? TestedDate { set; get; }
    }
}
