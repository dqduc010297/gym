using AspNetCore.DataBinding.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ApplicationDomain.Common
{
    public class PaginationResponse<T>
    {
        public int PageNumber { set; get; }
        public int TotalRows { set; get; }
        public IEnumerable<T> Data { set; get; }

        public PaginationResponse(int pageNumber, int totalRows)
        {
            this.PageNumber = pageNumber;
            this.TotalRows = totalRows;
        }
    }
}
