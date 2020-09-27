using ApplicationDomain.Gym.Entities;
using AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.EntityConfigurations.Gym
{
    public class AppFileConfiguration : EntityConfigurationBase<AppFile>
    {
        public override void OnConfigure(EntityTypeBuilder<AppFile> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
        }
    }
}
