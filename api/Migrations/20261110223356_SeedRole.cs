using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class SeedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "57ffc7cf-acd9-44d2-8d42-58ee38f74d86", "08e32247-d690-40f9-bdc8-4f98b4c71bbe", "User", "USER" },
                    { "e436aedb-7c87-4ac1-8086-4b57300eb84d", "0b0e04a4-9f5c-4129-b593-aa7ce4e29e4f", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "57ffc7cf-acd9-44d2-8d42-58ee38f74d86");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e436aedb-7c87-4ac1-8086-4b57300eb84d");
        }
    }
}
