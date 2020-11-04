using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace ApplicationDomain.Common
{
    public static class PermissionChecker
    {
        // Permission to view menu
        public static bool CanViewUserMenu (string userRole)
        {
            return userRole == RoleName.MANAGER || userRole == RoleName.RECEPTION;
        }
        public static bool CanCreateUser(string userRole)
        {
            return userRole == RoleName.RECEPTION;
        }
        public static bool CanCreateMealPlan(string userRole)
        {
            return userRole == RoleName.PERSONAL_TRAINER;
        }
        public static bool CanApproveMealPlan(string userRole)
        {
            return userRole == RoleName.MASTER;
        }
        public static bool CanCreateInBody(string userRole)
        {
            return userRole == RoleName.RECEPTION;
        }
    }
}
