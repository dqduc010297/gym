using ApplicationDomain.Common;
using ApplicationDomain.Gym.Entities;
using ApplicationDomain.Identity.Entities;
using ExcelDataReader;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Infrastructure.SeedData
{
    class Program
    {
        public static IServiceProvider _serviceProvider;
        static void Main(string[] args)
        {
            Console.WriteLine("Starting to seed data");
            _serviceProvider = ConfigureService(new ServiceCollection(), args);
            using (var dbContext = _serviceProvider.GetService<ApplicationDbContext>())
            {
                using (var transaction = dbContext.Database.BeginTransaction())
                {
                    SeedDataAsync(dbContext).Wait();
                    transaction.Commit();
                    Console.WriteLine("Commit all seed");
                }
            }
            Console.WriteLine("Seed data successfull");
        }

        public static IServiceProvider ConfigureService(IServiceCollection services, string[] args)
        {
            var dbContextFactory = new DesignTimeDbContextFactory();

            services.AddLogging();
            services.AddScoped<ApplicationDbContext>(p => dbContextFactory.CreateDbContext(args));
            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = false;

                // User settings
                options.User.RequireUniqueEmail = true;
            });
            return services.BuildServiceProvider();
        }
        private static async Task SeedDataAsync(ApplicationDbContext dbContext)
        {
            await SeedRoleDataAsync(dbContext);
            await SeedUserDataAsync(dbContext);
            await SeedInbodyDataAsync(dbContext);
        }
        private static async Task SeedRoleDataAsync(ApplicationDbContext dbContext)
        {
            if (!await dbContext.Set<Role>().AnyAsync())
            {
                Console.WriteLine("Start to seed user info");
                var roleManagement = _serviceProvider.GetService<RoleManager<Role>>();
                await roleManagement.CreateAsync(new Role
                {
                    Name = RoleName.SYS_ADMIN.ToString(),
                });
                await roleManagement.CreateAsync(new Role
                {
                    Name = RoleName.MANAGER.ToString(),
                });
                await roleManagement.CreateAsync(new Role
                {
                    Name = RoleName.MASTER.ToString(),
                });
                await roleManagement.CreateAsync(new Role
                {
                    Name = RoleName.PERSONAL_TRAINER.ToString(),
                });
                await roleManagement.CreateAsync(new Role
                {
                    Name = RoleName.MEMBER.ToString(),
                });
                Console.WriteLine("Finish seed user info");
            }
        }
        private static async Task SeedUserDataAsync(ApplicationDbContext dbContext)
        {
            if (!await dbContext.Set<User>().AnyAsync() && await dbContext.Set<Role>().AnyAsync())
            {
                Console.WriteLine("Start to seed user info");
                var userManagement = _serviceProvider.GetService<UserManager<User>>();
                string[] phoneNumbers = {
                    "0355588574",
                    "0355546955",
                    "0355555200",
                    "0855548984",
                    "0555514285",
                    "0855503017",
                    "0555523699",
                    "0855513847",
                    "0355573996",
                    "0555525810",
                    "0755554223",
                    "0555524749",
                    "0855532923",
                    "0955556718",
                    "0555585764",
                    "0355508801",
                    "0755584934",
                    "0855507075",
                    "0855547575",
                    "0355551926",
                    "0955537549",
                    "0355580911",
                    "0555512149",
                    "0355592938",
                    "0955560551",
                    "0355561663",
                    "0555535370",
                    "0355511144",
                    "0955503605",
                    "0755515410",
                    "0555545296",
                    "0955555254",
                    "0555508570",
                    "0755591878",
                    "0555529299",
                    "0355514955",
                    "0755535544",
                    "0355589452",
                    "0355556488",
                    "0355504094",
                    "0555531188",
                    "0555502244",
                    "0855544028",
                    "0855524646",
                    "0555522134",
                    "0555579750",
                    "0855555762",
                    "0855547031",
                    "0555508407",
                    "0555585031",
                    "0855512576",
                    "0555510636",
                    "0555570339",
                    "0555571998",
                    "0755589385",
                    "0955513069",
                    "0555511416",
                    "0555570386",
                    "0355582519",
                    "0355512379",
                    "0855561376",
                    "0555516933",
                    "0555527802",
                    "0555559709",
                    "0555570553",
                    "0355549943",
                    "0355590290",
                    "0555581568",
                    "0555569866",
                    "0555533713",
                    "0555507649",
                    "0555540353",
                    "0355529760",
                    "0555592052",
                    "0355523238",
                    "0555500904",
                    "0355503776",
                    "0555595412",
                    "0955515374",
                    "0855503357",
                    "0555546811",
                    "0755577215",
                    "0355526347",
                    "0955536142",
                    "0355556265",
                    "0355516781",
                    "0555578149",
                    "0855510543",
                    "0955533100",
                    "0555513514",
                    "0555503118",
                    "0555580543",
                    "0355535496",
                    "0755503325",
                    "0555595638",
                    "0955501017",
                    "0355576387",
                    "0355595024",
                    "0355512255",
                    "0755589721",
                    "0555518256",
                    "0755504580",
                    "0355515482",
                    "0755597666",
                    "0355561952",
                    "0555529440",
                    "0355501403",
                    "0355572927",
                    "0355503977",
                    "0555592599",
                    "0355526339",
                    "0955574828",
                    "0955559722",
                    "0355557335",
                    "0355504664",
                    "0955588086",
                    "0355577036",
                    "0555540549",
                    "0555539220",
                    "0555507318",
                    "0755502204",
                    "0955548005",
                    "0555584932",
                    "0355559803",
                    "0355525987",
                    "0355554867",
                    "0855598409",
                    "0855528245",
                    "0355515747",
                    "0355520498",
                    "0755537526",
                    "0955595390",
                    "0755510606",
                    "0955510250",
                    "0355582642",
                    "0555518316",
                    "0355578860",
                    "0955502753",
                    "0555552954",
                    "0755587448",
                    "0355564063",
                    "0755547408",
                    "0555540915",
                    "0955598495",
                    "0355520112",
                    "0955529702",
                    "0755502003",
                    "0855558024",
                    "0555549600",
                    "0755542668",
                    "0555540585",
                    "0955511357",
                    "0355507893",
                    "0555515990",
                    "0855569313",
                    "0555524093",
                    "0355562576",
                    "0355512898",
                    "0355579284",
                    "0355548298",
                    "0355531993",
                    "0555540602",
                    "0355593623",
                    "0855571786",
                    "0555548623",
                    "0955557930",
                    "0555515232",
                    "0555522686",
                    "0755595269",
                    "0355519395",
                    "0555569294",
                    "0855574922",
                    "0955501940",
                    "0355572171",
                    "0355524637",
                    "0355521444",
                    "0555548934",
                    "0555575111",
                    "0355504402",
                    "0355581482",
                    "0555547236",
                    "0555533412",
                    "0955543397",
                    "0555571935",
                    "0355573818",
                    "0355558414",
                    "0355589030",
                    "0555545272",
                    "0555551351",
                    "0555568741",
                    "0355529200",
                    "0555563633",
                    "0555575135",
                    "0355590904",
                    "0355554266",
                    "0755557871",
                    "0555576923",
                    "0555565443",
                    "0755529757",
                    "0755570413"
                };
                string[] names = {
                    "Đặng Tuấn Anh",
                    "Hoàng Đức Anh",
                    "Lưu Trang Anh",
                    "Phạm Hoàng Anh",
                    "Phạm Thị Hiền Anh",
                    "Phạm Khắc Việt Anh",
                    "Đỗ Hoàng Gia Bảo",
                    "Trần Thị Minh Châu",
                    "Tăng Phương Chi",
                    "Gan Feng Du",
                    "Phạm Tiến Dũng",
                    "Nguyễn Thái Dương",
                    "Trần An Dương",
                    "Mạc Trung Đức",
                    "Vũ Hương Giang",
                    "Nguyễn Thị Ngân Hà",
                    "Nguyễn Lê Hiếu",
                    "Phạm Xuân Hòa",
                    "Khoa Minh Hoàng",
                    "Nguyễn Hữu Hiệp Hoàng",
                    "Nguyễn Mạnh Hùng",
                    "Nguyễn Vũ Gia Hưng",
                    "Trần Tuấn Hưng",
                    "Phạm Gia Minh",
                    "Đỗ Hoàng Mỹ",
                    "Đỗ Quang Ngọc",
                    "Đàm Yến Nhi",
                    "Đoàn Hoàng Sơn",
                    "Nguyễn Công Thành",
                    "Bùi Phương Thảo",
                    "Nguyễn Hương Thảo",
                    "Tô Diệu Thảo",
                    "Vũ Phương Thảo",
                    "Đặng Huyền Thi",
                    "Đặng Thành Trung",
                    "Trịnh Thiên Trường",
                    "Lê Khánh Vy",
                    "Phạm Vũ Ngọc Diệp",
                    "Trần Đức Dương",
                    "Nguyễn Quốc Huy",
                    "Phạm Bảo Liên",
                    "Đinh Thùy Linh",
                    "Nguyễn Thùy Linh",
                    "Đỗ Hà Linh",
                    "Vũ Thùy Linh",
                    "Đỗ Thùy Linh",
                    "Hoàng Nhật Mai",
                    "Nguyễn Trọng Minh",
                    "Ngô Gia Minh",
                    "Mai Hoàng Minh",
                    "Đỗ Hải Nam",
                    "Trần Bảo Ngân",
                    "Trần Kim Ngân",
                    "Đỗ Minh Ngọc",
                    "Bùi Khánh Ngọc",
                    "Trần Uyên Nhi",
                    "Phạm Đặng Gia Như",
                    "Lê Tất Hoàng Phát",
                    "Đào Tuấn Phong",
                    "Nguyễn Phú Hải Phong",
                    "Trần Trung Phong",
                    "Bùi Thành Tài",
                    "Đặng Thanh Thảo",
                    "Nguyễn Trường Thịnh",
                    "Dương Phúc Thịnh",
                    "Nguyễn Minh Thư",
                    "Bùi Trung Minh Trí",
                    "Hoàng Quốc Trung",
                    "Vũ Hữu Minh Tường",
                    "Lê Thị Phương Vy",
                    "Nguyễn Hùng Anh",
                    "Nguyễn Ngọc Anh",
                    "Mai Tùng Bách",
                    "Nguyễn Trần Bình",
                    "Vũ Điệp Chi",
                    "Phạm Văn Đạt",
                    "Hoàng An Đông",
                    "Vũ Trung Đức",
                    "Phí Vũ Trí Đức",
                    "Đặng Gia Hân",
                    "Lưu Ngọc Hiền",
                    "Phạm Ngọc Hiếu",
                    "Phạm Sỹ Hiếu",
                    "Phạm Phương Hoa",
                    "Vũ Đức Huy",
                    "Vũ Thanh Huyền",
                    "Phạm Thu Huyền",
                    "Nguyễn Tuấn Hưng",
                    "Trần Đức Hưng",
                    "Nguyễn Tiến Hưng",
                    "Lê Nguyễn Diệu Hương",
                    "Nguyễn Hữu Ngọc Khánh",
                    "Bùi Nam Khánh",
                    "Đinh Ngọc Khánh",
                    "Hồ Nguyễn Minh Khuê",
                    "Phạm Vũ Diệp Lam",
                    "Đinh Hoàng Tùng Lâm",
                    "Lê Quang Long",
                    "Phạm Thị Phương Mai",
                    "Lê Trần Tuấn Minh",
                    "Nguyễn Thị Bích Ngọc",
                    "Lê Trung Nguyên",
                    "Lê Quỳnh Nhi",
                    "Nguyễn Tuyết Anh Nhi",
                    "Đinh Phú Sang",
                    "Đào Duy Thái",
                    "Hà Duy Anh",
                    "Đồng Đức Anh",
                    "Vũ Ngân Anh",
                    "Trần Mai Quỳnh Anh",
                    "Nguyễn Thị Tùng Chi",
                    "Phạm Quang Dũng",
                    "Nguyễn Tùng Dương",
                    "Phạm Đức Đạt ",
                    "Nguyễn Hải Đông ",
                    "Nguyễn Duy Đức",
                    "Nguyễn Vũ Minh Đức",
                    "Trịnh Việt Đức",
                    "Lưu Hương Giang",
                    "Quản Gia Hân ",
                    "Nguyễn Trọng Hiếu ",
                    "Nguyễn Quang Hùng",
                    "Trần Gia Huy",
                    "Đặng Vũ Huy",
                    "Phạm Ngọc Huyền",
                    "Trần Ngọc Khánh",
                    "Bùi Đức Kiên ",
                    "Bùi Hải Lâm ",
                    "Dương Khánh Linh",
                    "Trần Huy Hoàng Linh",
                    "Trần Nhật Long",
                    "Trần Đức Lương",
                    "Nguyễn Đức Minh",
                    "Đoàn Hải Minh",
                    "Mai Xuân Minh ",
                    "Bùi Xuân Nam ",
                    "Bùi Khánh Ngọc ",
                    "Mai Phương Ngọc ",
                    "Nguyễn Yến Nhi ",
                    "Đinh Ngọc Quỳnh Như",
                    "Nguyễn Minh Phương",
                    "Nguyễn Minh Quân ",
                    "Nguyễn Thúy Quỳnh ",
                    "Lê Thị Minh Tâm ",
                    "Hoàng Đức Thành",
                    "Nguyễn Đức Thiện",
                    "Phạm Thị Thu Trang",
                    "Lương Thị Thúy An",
                    "Bùi Quỳnh Anh",
                    "Phạm Phương Anh",
                    "Phạm Hoàng Bách",
                    "Đoàn Việt Bách",
                    "Trần Lê Gia Bảo",
                    "Bùi Ngọc Chi",
                    "Ng Hoàng Kim Cương",
                    "Hoàng Trung Dũng",
                    "Phạm Anh Duy",
                    "Bùi Công Duy",
                    "Bùi Nhật Dương",
                    "Đỗ Duy Đoàn",
                    "Đỗ Duy Hải",
                    "Lương Bảo Hân",
                    "Đỗ Gia Hân",
                    "Phạm Minh Hiển",
                    "Nguyễn Đức Hiếu",
                    "Phạm Gia Huy",
                    "Nguyễn Minh Huyền",
                    "Bùi Công Khanh",
                    "Nguyễn Hoàng Lâm",
                    "Văn Tiến Long",
                    "Hoàng Hải Minh",
                    "Nguyễn Tuấn Minh",
                    "Đỗ Trần Nam",
                    "Trần Đức Nam",
                    "Nguyễn Bảo Nam",
                    "Trần Vũ Hà Ngân",
                    "Phạm Trần Lan Nhi",
                    "Nguyễn Đăng Phong",
                    "Bùi An Phú",
                    "Đỗ Đức Phúc",
                    "Nguyễn Hồng Phúc",
                    "Bùi Đàm Mai Phương",
                    "Phạm Minh Phương",
                    "Nguyễn Hữu Thành",
                    "Lại Hương Thảo",
                    "Nguyễn Quang Thiện",
                    "Ngô Kim Khánh",
                    "Bùi Lam Khê",
                    "An Gia Linh",
                    "Đoàn Phạm Ngọc Linh",
                    "Nguyễn Hoàng Linh",
                    "Trương Hồng Linh",
                    "Phạm Xuân Mai",
                    "Vũ Hoàng Mai",
                    "Dương Gia Minh",
                    "Hà Trần Thảo Minh",
                    "Nguyễn Quỳnh Nga",
                    "Bùi Thảo Ngọc",
                    "Phạm Hải Đức Phát",
                    "Nguyễn Việt Phong"
                };
                for (int i = 0; i < 150; i++)
                {
                    var user = new User
                    {
                        Fullname = names[i],
                        UserName = phoneNumbers[i],
                        Email = $"{i + 1}@gmail.com",
                        PhoneNumber = phoneNumbers[i],
                        YearOfBirth = 1990 + (i % 15),
                        Height = 140 + (i % 40),
                        Gender = i % 2 == 0 ? Gender.MALE : Gender.FEMALE,
                        DateJoined = new DateTime(2019, 8, 1),
                        Status = UserStatus.ACTIVATE
                    };
                    var result = await userManagement.CreateAsync(user, "Password@1");
                    if (result.Succeeded)
                    {
                        await userManagement.AddToRoleAsync(user, RoleName.MEMBER.ToString());
                    }
                }
                for (int i = 150; i < 200; i++)
                {
                    var user = new User
                    {
                        Fullname = names[i],
                        UserName = phoneNumbers[i],
                        Email = $"{i + 1}@gmail.com",
                        PhoneNumber = phoneNumbers[i],
                        YearOfBirth = 1990 + (i % 6),
                        Height = 130 + (i % 40),
                        Gender = i % 2 == 0 ? Gender.MALE : Gender.FEMALE,
                        DateJoined = new DateTime(2019, 8, 1),
                        Status = UserStatus.ACTIVATE
                    };
                    var result = await userManagement.CreateAsync(user, "Password@1");
                    if (result.Succeeded)
                    {
                        await userManagement.AddToRoleAsync(user, RoleName.PERSONAL_TRAINER.ToString());
                    }
                }
                Console.WriteLine("Finish seed user info");
            }
        }

        private static async Task SeedInbodyDataAsync(ApplicationDbContext dbContext)
        {
            if (!await dbContext.Set<InBody>().AnyAsync() && await dbContext.Set<User>().AnyAsync())
            {
                Console.WriteLine("Start to seed inbody info");

                List<InBody> inbodys = new List<InBody>();
                using (var stream = File.Open(String.Format(@"{0}\Data\Inbody.xlsx", Environment.CurrentDirectory), FileMode.Open, FileAccess.Read))
                {
                    using (var reader = ExcelReaderFactory.CreateReader(stream))
                    {
                        do
                        {
                            reader.Read();
                            while (reader.Read()) //Each ROW
                            {
                                InBody inBody = new InBody();
                                inBody.TestedDate = (DateTime)reader.GetValue(0);
                                inBody.BodyWater = Convert.ToSingle((double)reader.GetValue(1));
                                inBody.Protein = Convert.ToSingle((double)reader.GetValue(2));
                                inBody.Mineral = Convert.ToSingle((double)reader.GetValue(3));
                                inBody.BodyFatMass = Convert.ToSingle((double)reader.GetValue(4));
                                inBody.Weight = Convert.ToSingle((double)reader.GetValue(5));
                                inBody.SkeletalMuscleMass = Convert.ToSingle((double)reader.GetValue(6));
                                inBody.Score = Convert.ToInt32((double)reader.GetValue(7));
                                inBody.WaistHipRatio = Convert.ToSingle((double)reader.GetValue(1));
                                inBody.VisceralFatLevel = Convert.ToInt32((double)reader.GetValue(9));
                                inBody.UserId = Convert.ToInt32((double)reader.GetValue(10));
                                inbodys.Add(inBody);
                            }
                        } while (reader.NextResult()); //Move to NEXT SHEET

                    }
                    await dbContext.AddRangeAsync(inbodys);
                    await dbContext.SaveChangesAsync();
                    Console.WriteLine("Finised to seed inbody info");
                }
            }
        }
    }
}
