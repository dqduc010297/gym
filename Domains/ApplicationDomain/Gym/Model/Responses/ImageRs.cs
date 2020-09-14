using ApplicationDomain.Gym.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Models.Responses
{
    public class ImageRs
    {
        public IEnumerable<ImageDTO> MyImages { set; get; }
        public IEnumerable<ImageDTO> SharedImages { set; get; }
    }
}
