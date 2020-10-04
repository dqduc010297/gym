using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.DbMigration.Migrations
{
    public partial class AddMealPeriod : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MealPlanPeriod",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTimeOffset>(nullable: false),
                    CreatedByUserId = table.Column<int>(nullable: false),
                    UpdatedDate = table.Column<DateTimeOffset>(nullable: false),
                    UpdatedByUserId = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    Index = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    SubTitle = table.Column<string>(nullable: true),
                    ProteinPercent = table.Column<int>(nullable: false),
                    FatPercent = table.Column<int>(nullable: false),
                    CarbPercent = table.Column<int>(nullable: false),
                    BreakfastMenu = table.Column<string>(nullable: true),
                    BreakfastNote = table.Column<string>(nullable: true),
                    BreakfastCalo = table.Column<int>(nullable: false),
                    LunchMenu = table.Column<string>(nullable: true),
                    LunchNote = table.Column<string>(nullable: true),
                    LunchCalo = table.Column<int>(nullable: false),
                    BeforeWorkoutMenu = table.Column<string>(nullable: true),
                    BeforeWorkoutNote = table.Column<string>(nullable: true),
                    BeforeWorkoutCalo = table.Column<int>(nullable: false),
                    DinnerMenu = table.Column<string>(nullable: true),
                    DinnerNote = table.Column<string>(nullable: true),
                    DinnerCalo = table.Column<int>(nullable: false),
                    ExtraMenu = table.Column<string>(nullable: true),
                    ExtraNote = table.Column<string>(nullable: true),
                    ExtraCalo = table.Column<int>(nullable: false),
                    Note = table.Column<string>(nullable: true),
                    Calo = table.Column<int>(nullable: false),
                    Target = table.Column<string>(nullable: true),
                    Start = table.Column<DateTime>(nullable: false),
                    End = table.Column<DateTime>(nullable: false),
                    IsLock = table.Column<bool>(nullable: false),
                    IsActivate = table.Column<bool>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MealPlanPeriod", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MealPlanPeriod_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MealPlanPeriod_UserId",
                table: "MealPlanPeriod",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MealPlanPeriod");
        }
    }
}
