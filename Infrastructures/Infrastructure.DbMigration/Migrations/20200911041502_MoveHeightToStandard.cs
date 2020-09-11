using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.DbMigration.Migrations
{
    public partial class MoveHeightToStandard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Height",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<float>(
                name: "Height",
                table: "InBodyStandard",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Height",
                table: "InBodyStandard");

            migrationBuilder.AddColumn<float>(
                name: "Height",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0f);
        }
    }
}
