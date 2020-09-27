using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model.Responses
{
    public class AlbumRs
    {
        public IEnumerable<MediaFile> MyMediaFiles { set; get; }
        public IEnumerable<MediaFile> SharedMediaFiles { set; get; }
    }
}
