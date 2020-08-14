using ApplicationDomain.Entities;
using ApplicationDomain.Identity.Entities;
using AspNetCore.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, int>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public object GetUnitOfWorkContext()
        {
            return this;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var configLoader = new ConfigurationLoader<ApplicationDbContext>(builder);
            configLoader.Load();
        }

        public override int SaveChanges()
        {
            Tracking();
            return base.SaveChanges();
        }
        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            Tracking();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            Tracking();
            return base.SaveChangesAsync(cancellationToken);
        }
        private void Tracking()
        {
            foreach (var entity in ChangeTracker
                           .Entries()
                           .Where(p => p.Entity is EntityBase<int> && (p.State == EntityState.Added || p.State == EntityState.Modified))
                           .Select(p => p.Entity).Cast<EntityBase<int>>())
            {
                var currentUsername = !string.IsNullOrEmpty(HttpContext.) ? HttpContext.User.Identity.Name : "Anonymous";

                entity.CreatedDate = entity.CreatedDate == entity.UpdatedDate ? DateTime.Now : entity.CreatedDate;
                entity.UpdatedDate = DateTime.Now;

                entity.CreatedDate = entity.CreatedDate == entity.UpdatedDate ? DateTime.Now : entity.CreatedDate;
                entity.UpdatedDate = DateTime.Now;
            }
        }
    }
}
