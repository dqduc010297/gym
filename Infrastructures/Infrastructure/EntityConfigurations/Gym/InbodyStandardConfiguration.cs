using ApplicationDomain.Gym.Entities;
using AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.EntityConfigurations.Gym
{
    public class InbodyStandardConfiguration : EntityConfigurationBase<InBodyStandard>
    {
        public override void OnConfigure(EntityTypeBuilder<InBodyStandard> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
        }
    }
}
