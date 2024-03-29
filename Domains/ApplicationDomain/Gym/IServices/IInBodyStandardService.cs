﻿using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.Gym.Model.MyInBody;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.Gym.IServices
{
    public interface IInBodyStandardService
    {
        Task<InBodyStandardDTO> GetLatestInBodyStandard(int userId);
        Task<bool> CheckDiff(InBodyStandard inBodyStandard);
        Task<int> CreateInBodyStandard(InBodyStandard entity);
    }
}
