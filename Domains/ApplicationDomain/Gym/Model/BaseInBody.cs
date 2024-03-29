﻿using ApplicationDomain.Gym.Model.MyInBody;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class BaseInBody
    {
        public int Id { set; get; }
        public BodyCompositionAnalysis BodyCompositionAnalysis { set; get; }
        public MuscleFatAnalysis MuscleFatAnalysis { set; get; }
        public ObesityAnalysis ObesityAnalysis { set; get; }
        public int Score { set; get; }
        public DateTime TestedDate { set; get; }
        public float Weight { set; get; }
        public int InBodyStandardId { set; get; }
        public int UserId { set; get; }
    }
}
