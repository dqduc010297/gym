﻿using ApplicationDomain.Gym.Entities;
using AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.EntityConfigurations.Gym
{
    public class InbodyConfiguration : EntityConfigurationBase<InBody>
    {
        public override void OnConfigure(EntityTypeBuilder<InBody> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();

            builder.HasOne(p => p.User).WithMany().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Cascade);
            builder.HasOne(p => p.InBodyStandard).WithMany().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);
        }
    }
}
