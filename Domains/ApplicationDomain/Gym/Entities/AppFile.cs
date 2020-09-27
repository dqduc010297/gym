using ApplicationDomain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Entities
{
    public class AppFile: EntityBase<int>
    {
        public string Url { set; get; }
        public string SharedWith { set; get; }
        public string ContentType { set; get; }
    }
}
