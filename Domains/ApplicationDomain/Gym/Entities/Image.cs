using ApplicationDomain.Entities;
using ApplicationDomain.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Entities
{
    public class Image: EntityBase<int>
    {
        public string Url { set; get; }
        public string SharedWith { set; get; }
        public int UserId { set; get; }
        public User User { set; get; }
    }
}
