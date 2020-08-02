using ApplicationDomain.Identity.Models;
using AspNetCore.Common.Identity;
using AspNetCore.Domain;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Identity.Entities
{
    public class Role : IdentityRole<int>
    {
    }
}
