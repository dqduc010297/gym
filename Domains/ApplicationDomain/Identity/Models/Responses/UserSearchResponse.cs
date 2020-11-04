using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Responses
{
    public class UserSearchResponse
    {
        public int Id { set; get; }
        public string Label { set; get; }
        public string AvatarURL { set; get; }
    }
}
