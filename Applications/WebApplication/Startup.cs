using System;
using System.IO;
using System.Text;
using ApplicationDomain.Identity.Entities;
using AspNetCore.IoC.Autofact;
using AspNetCore.Mvc;
using AspNetCore.Mvc.JwtBearer;
using AspNetCore.UnitOfWork.EntityFramework;
using AutoMapper;
using FluentValidation.AspNetCore;
using Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace WebApplication
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            var EFConnectionString = Configuration.GetConnectionString("DefaultConnection");
            var jwtSecurityKey = Configuration.GetValue<string>("Security:Jwt:SecurityKey");
            var tokenTimeOutMinutes = Configuration.GetValue<long>("Security:Jwt:TokenTimeOutMinutes");



            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description =
                        "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    In = ParameterLocation.Header,
                    Scheme = "Bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
                        },
                        new string[] {}
                    }
                });
                c.DocInclusionPredicate((docName, apiDesc) =>
                {
                    // Filter out 3rd party controllers
                    var assemblyName = ((ControllerActionDescriptor)apiDesc.ActionDescriptor).ControllerTypeInfo.Assembly.GetName().Name;
                    var currentAssemblyName = GetType().Assembly.GetName().Name;
                    return currentAssemblyName == assemblyName;
                });

            });
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder =>
                    {
                        builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                    });
            });
            services.AddHttpContextAccessor();
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(EFConnectionString, sqlServerOptions =>
                {
                    sqlServerOptions.EnableRetryOnFailure();
                });
            });

            services
                .AddMvcApi()
                .AddFluentValidation(p => p.RegisterValidatorsFromAssemblyContaining<ApplicationDomain.AssemplyMarker>().RegisterValidatorsFromAssemblyContaining<Startup>());
            //services.AddCors();
            //services.AddAutoMapper(typeof(Domain.AssemplyMarker));

            // Add UoW 
            services.AddUnitOfWork<ApplicationDbContext>();
            // Add Identity
            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders(); // protection provider responsible for generating an email confirmation token or a password reset token
            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = false;

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(tokenTimeOutMinutes);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            services.AddAutoMapper(typeof(ApplicationDomain.AssemplyMarker));

            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });
            // Add Jwt Bearer
            // IMPORTANCE: AddJwtBearerAuthentication should be added after services.AddIdentity, to replaced Authentication config in Identity
            services.AddJwtBearerAuthentication(options =>
            {
                options.SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecurityKey));
                options.TokenTimeOutMinutes = tokenTimeOutMinutes;
            });

            // ALL SERVICE REGISTERS SHOULD BE PLACED BEFORE THIS LINE
            // Register our custom service provider
            var autofactServiceProvider = services.BuildAutofactServiceProvider(options =>
            {
                // Register services,...
                options.AddAsImplementedInterfaces(typeof(ApplicationDomain.AssemplyMarker));
                // Register repositories
                options.AddAsImplementedInterfaces(typeof(Infrastructure.AssemplyMarker));
            });
            return autofactServiceProvider;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder =>
                 builder
                 .AllowAnyOrigin()
                 .AllowAnyMethod()
                 .AllowAnyHeader()
                 .AllowCredentials());

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                // Enable middleware to serve generated Swagger as a JSON endpoint.
                app.UseSwagger();

                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
                // specifying the Swagger JSON endpoint.
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                    //c.RoutePrefix = string.Empty;
                });
            }
        }
    }
}
