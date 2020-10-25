using ApplicationDomain.Common;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace ApplicationDomain.Identity.Models
{
    public class Permission
    {
        private string _currentRole { set; get; }
        public Permission(string currentRole)
        {
            this._currentRole = currentRole;
        }
        public bool CanCreateOrEditMealPlan { get { return PermissionChecker.CanCreateMealPlan(this._currentRole); } }
        public bool CanApproveMealPlan { get { return PermissionChecker.CanApproveMealPlan(this._currentRole); } }
    }
}
