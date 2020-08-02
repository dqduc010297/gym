using ApplicationDomain.Identity.Entities;
using AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.EntityConfigurations.Identity
{
    public class UserConfiguration : EntityConfigurationBase<User>
    {
        public override void OnConfigure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
        }
    }
}
