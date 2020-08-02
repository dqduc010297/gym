﻿using ApplicationDomain.Entities;
using AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace Infrastructure.EntityConfigurations
{
    public abstract class EntityConfigurationBase<TEntity, TKeyType> : EntityConfigurationBase<TEntity>
         where TEntity : EntityBase<TKeyType>
    {
        public new void Configure(ModelBuilder builder)
        {
            EntityTypeBuilder<TEntity> typeBuilder = builder.Entity<TEntity>();

            typeBuilder.HasKey(p => p.Id);
            typeBuilder.Property(p => p.Id).ValueGeneratedOnAdd();

            typeBuilder.Property(p => p.RowVersion)
                .IsConcurrencyToken()
                .ValueGeneratedOnAddOrUpdate();
            OnConfigure(typeBuilder);
        }

    }
}
