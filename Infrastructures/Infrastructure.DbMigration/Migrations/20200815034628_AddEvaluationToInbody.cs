using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.DbMigration.Migrations
{
    public partial class AddEvaluationToInbody : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BMIEvaluation",
                table: "InBody",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PBFEvaluation",
                table: "InBody",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BMIEvaluation",
                table: "InBody");

            migrationBuilder.DropColumn(
                name: "PBFEvaluation",
                table: "InBody");
        }
    }
}
