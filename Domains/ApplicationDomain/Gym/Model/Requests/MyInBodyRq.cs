using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.Requests
{
    public class MyInBodyRq: FilterRq
    {
        [JsonProperty("testedDate")]
        public DateTime? TestedDate { set; get; }
    }
}
