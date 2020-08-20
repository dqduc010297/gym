using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.DbMigration.Migrations
{
    public partial class AddInBodyStandard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InBodyStandardId",
                table: "InBody",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "InBodyStandard",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTimeOffset>(nullable: false),
                    CreatedByUserId = table.Column<int>(nullable: false),
                    UpdatedDate = table.Column<DateTimeOffset>(nullable: false),
                    UpdatedByUserId = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    BodyWaterMax = table.Column<float>(nullable: false),
                    BodyWaterMin = table.Column<float>(nullable: false),
                    ProteinMax = table.Column<float>(nullable: false),
                    ProteinMin = table.Column<float>(nullable: false),
                    MineralMax = table.Column<float>(nullable: false),
                    MineralMin = table.Column<float>(nullable: false),
                    BodyFatMassMax = table.Column<float>(nullable: false),
                    BodyFatMassMin = table.Column<float>(nullable: false),
                    WeightMax = table.Column<float>(nullable: false),
                    WeightMin = table.Column<float>(nullable: false),
                    SkeletalMuscleMassMax = table.Column<float>(nullable: false),
                    SkeletalMuscleMassMin = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InBodyStandard", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_InBody_InBodyStandardId",
                table: "InBody",
                column: "InBodyStandardId");

            migrationBuilder.AddForeignKey(
                name: "FK_InBody_InBodyStandard_InBodyStandardId",
                table: "InBody",
                column: "InBodyStandardId",
                principalTable: "InBodyStandard",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InBody_InBodyStandard_InBodyStandardId",
                table: "InBody");

            migrationBuilder.DropTable(
                name: "InBodyStandard");

            migrationBuilder.DropIndex(
                name: "IX_InBody_InBodyStandardId",
                table: "InBody");

            migrationBuilder.DropColumn(
                name: "InBodyStandardId",
                table: "InBody");
        }
    }
}
