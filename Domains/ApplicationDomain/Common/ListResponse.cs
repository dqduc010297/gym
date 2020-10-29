using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Common
{
    public abstract class ListResponse
    {
        public int PageCount { get; set; }
        public int PageNumber { get; set; }
    }
}
