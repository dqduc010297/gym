using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Common
{
    public class PaginationResponse<T>
    {
        public int PageCount { get; set; }
        public int PageNumber { get; set; }
        public IEnumerable<T> Data { set; get; }
    }
}
