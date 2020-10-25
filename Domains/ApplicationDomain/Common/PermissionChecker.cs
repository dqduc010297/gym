using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace ApplicationDomain.Common
{
    public static class PermissionChecker
    {
        public static bool CanCreateMealPlan(string userRole)
        {
            return userRole == RoleName.PERSONAL_TRAINER;
        }
        public static bool CanApproveMealPlan(string userRole)
        {
            return userRole == RoleName.MASTER;
        }
    }
}
