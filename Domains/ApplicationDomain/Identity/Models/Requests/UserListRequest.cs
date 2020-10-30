using ApplicationDomain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Models.Requests
{
    public class UserListRequest : PaginationRequest
    {
        public string SearchTerm { set; get; }
    }
}
