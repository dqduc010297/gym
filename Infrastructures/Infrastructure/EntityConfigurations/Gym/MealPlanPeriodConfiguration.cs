using ApplicationDomain.Gym.Entities;
using AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.EntityConfigurations.Gym
{
    public class MealPlanPeriodConfiguration : EntityConfigurationBase<MealPlanPeriod>
    {
        public override void OnConfigure(EntityTypeBuilder<MealPlanPeriod> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();

            builder.HasOne(p => p.User).WithMany().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);
        }
    }
}
