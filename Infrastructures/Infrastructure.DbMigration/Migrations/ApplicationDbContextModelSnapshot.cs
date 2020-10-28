﻿// <auto-generated />
using System;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.DbMigration.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.AppFile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ContentType");

                    b.Property<int>("CreatedByUserId");

                    b.Property<DateTimeOffset>("CreatedDate");

                    b.Property<byte[]>("RowVersion");

                    b.Property<string>("SharedWith");

                    b.Property<int>("UpdatedByUserId");

                    b.Property<DateTimeOffset>("UpdatedDate");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.ToTable("AppFile");
                });

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.InBody", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BMIEvaluation");

                    b.Property<float>("BodyFatMass");

                    b.Property<float>("BodyWater");

                    b.Property<int>("CreatedByUserId");

                    b.Property<DateTimeOffset>("CreatedDate");

                    b.Property<int>("InBodyStandardId");

                    b.Property<float>("Mineral");

                    b.Property<int>("PBFEvaluation");

                    b.Property<float>("PercentBodyFat");

                    b.Property<float>("Protein");

                    b.Property<byte[]>("RowVersion");

                    b.Property<int>("Score");

                    b.Property<float>("SkeletalMuscleMass");

                    b.Property<DateTime>("TestedDate");

                    b.Property<int>("UpdatedByUserId");

                    b.Property<DateTimeOffset>("UpdatedDate");

                    b.Property<int>("UserId");

                    b.Property<int>("VisceralFatLevel");

                    b.Property<float>("WaistHipRatio");

                    b.Property<float>("Weight");

                    b.HasKey("Id");

                    b.HasIndex("InBodyStandardId");

                    b.HasIndex("UserId");

                    b.ToTable("InBody");
                });

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.InBodyStandard", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("BodyFatMassMax");

                    b.Property<float>("BodyFatMassMin");

                    b.Property<float>("BodyWaterMax");

                    b.Property<float>("BodyWaterMin");

                    b.Property<int>("CreatedByUserId");

                    b.Property<DateTimeOffset>("CreatedDate");

                    b.Property<float>("Height");

                    b.Property<float>("MineralMax");

                    b.Property<float>("MineralMin");

                    b.Property<float>("ProteinMax");

                    b.Property<float>("ProteinMin");

                    b.Property<byte[]>("RowVersion");

                    b.Property<float>("SkeletalMuscleMassMax");

                    b.Property<float>("SkeletalMuscleMassMin");

                    b.Property<int>("UpdatedByUserId");

                    b.Property<DateTimeOffset>("UpdatedDate");

                    b.Property<int>("UserId");

                    b.Property<float>("WeightMax");

                    b.Property<float>("WeightMin");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("InBodyStandard");
                });

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.MealPlanPeriod", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BeforeWorkoutCalo");

                    b.Property<string>("BeforeWorkoutMenu");

                    b.Property<string>("BeforeWorkoutNote");

                    b.Property<int>("BreakfastCalo");

                    b.Property<string>("BreakfastMenu");

                    b.Property<string>("BreakfastNote");

                    b.Property<int>("Calo");

                    b.Property<int>("CarbPercent");

                    b.Property<int>("CreatedByUserId");

                    b.Property<DateTimeOffset>("CreatedDate");

                    b.Property<int>("DinnerCalo");

                    b.Property<string>("DinnerMenu");

                    b.Property<string>("DinnerNote");

                    b.Property<DateTime>("End");

                    b.Property<int>("ExtraCalo");

                    b.Property<string>("ExtraMenu");

                    b.Property<string>("ExtraNote");

                    b.Property<int>("FatPercent");

                    b.Property<int>("Index");

                    b.Property<bool>("IsActivate");

                    b.Property<bool>("IsLock");

                    b.Property<int>("LunchCalo");

                    b.Property<string>("LunchMenu");

                    b.Property<string>("LunchNote");

                    b.Property<string>("Note");

                    b.Property<int>("ProteinPercent");

                    b.Property<byte[]>("RowVersion");

                    b.Property<DateTime>("Start");

                    b.Property<string>("SubTitle");

                    b.Property<string>("Target");

                    b.Property<string>("Title");

                    b.Property<int>("UpdatedByUserId");

                    b.Property<DateTimeOffset>("UpdatedDate");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("MealPlanPeriod");
                });

            modelBuilder.Entity("ApplicationDomain.Identity.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("ApplicationDomain.Identity.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("AvatarURL");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<DateTime>("DateJoined");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("DropboxToken");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("Fullname");

                    b.Property<int>("Gender");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SearchName");

                    b.Property<string>("SecurityStamp");

                    b.Property<int>("Status");

                    b.Property<string>("TempPassword");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.InBody", b =>
                {
                    b.HasOne("ApplicationDomain.Gym.Entities.InBodyStandard", "InBodyStandard")
                        .WithMany()
                        .HasForeignKey("InBodyStandardId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("ApplicationDomain.Identity.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.InBodyStandard", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("ApplicationDomain.Gym.Entities.MealPlanPeriod", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<int>", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ApplicationDomain.Identity.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("ApplicationDomain.Identity.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
