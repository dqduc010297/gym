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
        public int PageCount { get; }
        public IEnumerable<T> Data { set; get; }

        public PaginationResponse(int pageNumber, int totalRows, int rowsPerPage)
        {
            if (rowsPerPage < 1 || rowsPerPage > 999)
            {
                throw new ArgumentOutOfRangeException("RowsPerPage");
            }
            if (pageNumber < 1)
            {
                throw new Exception("PageNumber must be than one");
            }
            this.PageNumber = pageNumber;
            this.PageCount = totalRows / rowsPerPage + (totalRows % rowsPerPage) == 0 ? 0 : 1;
        }
    }
}
