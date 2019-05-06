using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace coreProject.Migrations
{
    public partial class InitialModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Caterer",
                columns: table => new
                {
                    companyID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(maxLength: 50, nullable: true),
                    email = table.Column<string>(maxLength: 50, nullable: true),
                    startDate = table.Column<DateTime>(type: "date", nullable: true),
                    totalTime = table.Column<TimeSpan>(nullable: true),
                    streetNo = table.Column<int>(nullable: true),
                    houseNo = table.Column<int>(nullable: true),
                    townName = table.Column<string>(maxLength: 60, nullable: true),
                    city = table.Column<string>(maxLength: 50, nullable: true),
                    country = table.Column<string>(maxLength: 50, nullable: true),
                    tent = table.Column<bool>(nullable: true),
                    generator = table.Column<bool>(nullable: true),
                    heater = table.Column<bool>(nullable: true),
                    servingStaff = table.Column<bool>(nullable: true),
                    lights = table.Column<bool>(nullable: true),
                    stageDecorations = table.Column<bool>(nullable: true),
                    cooking = table.Column<bool>(nullable: true),
                    bridalRoom = table.Column<bool>(nullable: true),
                    airCondition = table.Column<bool>(nullable: true),
                    valetParking = table.Column<bool>(nullable: true),
                    wifi = table.Column<bool>(nullable: true),
                    dj = table.Column<bool>(nullable: true),
                    decoration = table.Column<bool>(nullable: true),
                    U_id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Caterer", x => x.companyID);
                });

            migrationBuilder.CreateTable(
                name: "Check",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Check", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Seller",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seller", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    U_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(maxLength: 50, nullable: true),
                    Password = table.Column<string>(maxLength: 50, nullable: true),
                    U_type = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.U_id);
                });

            migrationBuilder.CreateTable(
                name: "CatererBooking",
                columns: table => new
                {
                    b_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    prefferedTime = table.Column<string>(maxLength: 50, nullable: true),
                    noOfDays = table.Column<int>(nullable: true),
                    eventDate = table.Column<DateTime>(type: "date", nullable: true),
                    userName = table.Column<string>(maxLength: 50, nullable: true),
                    userEmail = table.Column<string>(maxLength: 50, nullable: true),
                    phone = table.Column<string>(maxLength: 50, nullable: true),
                    city = table.Column<string>(maxLength: 50, nullable: true),
                    companyID = table.Column<int>(nullable: true),
                    status = table.Column<int>(nullable: true),
                    packege = table.Column<int>(nullable: true),
                    U_id = table.Column<int>(nullable: true),
                    starToCustomer = table.Column<int>(nullable: true),
                    starToOwner = table.Column<int>(nullable: true),
                    reviewToCustomer = table.Column<string>(unicode: false, nullable: true),
                    reviewToOwner = table.Column<string>(unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CatererBooking", x => x.b_id);
                    table.ForeignKey(
                        name: "FK_CatererBooking_Caterer",
                        column: x => x.companyID,
                        principalTable: "Caterer",
                        principalColumn: "companyID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CatererBooking_Users",
                        column: x => x.U_id,
                        principalTable: "Users",
                        principalColumn: "U_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "halls",
                columns: table => new
                {
                    companyID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(maxLength: 50, nullable: true),
                    email = table.Column<string>(maxLength: 50, nullable: true),
                    startDate = table.Column<DateTime>(type: "date", nullable: true),
                    totalTime = table.Column<TimeSpan>(nullable: true),
                    streetNo = table.Column<int>(nullable: true),
                    houseNo = table.Column<int>(nullable: true),
                    townName = table.Column<string>(maxLength: 50, nullable: true),
                    city = table.Column<string>(maxLength: 50, nullable: true),
                    country = table.Column<string>(maxLength: 50, nullable: true),
                    price_per_head = table.Column<int>(nullable: true),
                    b_capacity = table.Column<int>(nullable: true),
                    p_capacity = table.Column<int>(nullable: true),
                    wifi = table.Column<string>(maxLength: 10, nullable: true),
                    dj = table.Column<string>(maxLength: 10, nullable: true),
                    b_mackup = table.Column<string>(maxLength: 10, nullable: true),
                    U_id = table.Column<int>(nullable: true),
                    chicken_main = table.Column<string>(maxLength: 50, nullable: true),
                    chicken_rice = table.Column<string>(maxLength: 50, nullable: true),
                    chicken_sweet = table.Column<string>(maxLength: 50, nullable: true),
                    chicken_starter = table.Column<string>(maxLength: 50, nullable: true),
                    mutton_main = table.Column<string>(maxLength: 50, nullable: true),
                    mutton_rice = table.Column<string>(maxLength: 50, nullable: true),
                    mutton_sweet = table.Column<string>(maxLength: 50, nullable: true),
                    mutton_starter = table.Column<string>(maxLength: 50, nullable: true),
                    beef_main = table.Column<string>(maxLength: 50, nullable: true),
                    beef_rice = table.Column<string>(maxLength: 50, nullable: true),
                    beef_sweet = table.Column<string>(maxLength: 50, nullable: true),
                    beef_starter = table.Column<string>(maxLength: 50, nullable: true),
                    chickenPrice = table.Column<int>(nullable: true),
                    muttonPrice = table.Column<int>(nullable: true),
                    beefPrice = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_halls", x => x.companyID);
                    table.ForeignKey(
                        name: "FK_halls_Users",
                        column: x => x.U_id,
                        principalTable: "Users",
                        principalColumn: "U_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Media",
                columns: table => new
                {
                    companyID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(maxLength: 50, nullable: true),
                    email = table.Column<string>(maxLength: 50, nullable: true),
                    startDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    totalTime = table.Column<TimeSpan>(nullable: true),
                    streetNo = table.Column<int>(nullable: true),
                    houseNo = table.Column<int>(nullable: true),
                    townName = table.Column<string>(maxLength: 50, nullable: true),
                    city = table.Column<string>(maxLength: 50, nullable: true),
                    country = table.Column<string>(maxLength: 50, nullable: true),
                    droneCamera = table.Column<bool>(nullable: true),
                    hdCam = table.Column<bool>(nullable: true),
                    noOfCams = table.Column<int>(nullable: true),
                    albums = table.Column<bool>(nullable: true),
                    photoGraphy = table.Column<bool>(nullable: true),
                    filmGraphy = table.Column<bool>(nullable: true),
                    U_id = table.Column<int>(nullable: true),
                    CamsOne = table.Column<int>(nullable: true),
                    PriceOne = table.Column<int>(nullable: true),
                    DroneOne = table.Column<int>(nullable: true),
                    AlbumOne = table.Column<int>(nullable: true),
                    CamsTwo = table.Column<int>(nullable: true),
                    PriceTwo = table.Column<int>(nullable: true),
                    DroneTwo = table.Column<int>(nullable: true),
                    AlbumTwo = table.Column<int>(nullable: true),
                    CamsThree = table.Column<int>(nullable: true),
                    PriceThree = table.Column<int>(nullable: true),
                    DroneThree = table.Column<int>(nullable: true),
                    AlbumThree = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Media", x => x.companyID);
                    table.ForeignKey(
                        name: "FK_Media_Users",
                        column: x => x.U_id,
                        principalTable: "Users",
                        principalColumn: "U_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    b_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    prefferedTime = table.Column<string>(maxLength: 10, nullable: true),
                    noOfGuests = table.Column<int>(nullable: true),
                    eventDate = table.Column<DateTime>(type: "date", nullable: true),
                    userName = table.Column<string>(maxLength: 50, nullable: true),
                    userEmail = table.Column<string>(maxLength: 50, nullable: true),
                    phone = table.Column<string>(maxLength: 20, nullable: true),
                    city = table.Column<string>(maxLength: 20, nullable: true),
                    companyID = table.Column<int>(nullable: true),
                    status = table.Column<int>(nullable: true),
                    packege = table.Column<int>(nullable: true),
                    U_id = table.Column<int>(nullable: true),
                    starToCustomer = table.Column<int>(nullable: true),
                    starToOwner = table.Column<int>(nullable: true),
                    reviewToCutomer = table.Column<string>(unicode: false, nullable: true),
                    reviewToOwner = table.Column<string>(unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.b_id);
                    table.ForeignKey(
                        name: "FK_Bookings_halls",
                        column: x => x.companyID,
                        principalTable: "halls",
                        principalColumn: "companyID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bookings_Users",
                        column: x => x.U_id,
                        principalTable: "Users",
                        principalColumn: "U_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BookingMedia",
                columns: table => new
                {
                    b_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    prefferedTime = table.Column<string>(maxLength: 50, nullable: true),
                    noOfDays = table.Column<int>(nullable: true),
                    eventDate = table.Column<DateTime>(type: "date", nullable: true),
                    userName = table.Column<string>(maxLength: 50, nullable: true),
                    userEmail = table.Column<string>(maxLength: 50, nullable: true),
                    phone = table.Column<string>(maxLength: 50, nullable: true),
                    city = table.Column<string>(maxLength: 50, nullable: true),
                    companyID = table.Column<int>(nullable: true),
                    status = table.Column<int>(nullable: true),
                    packege = table.Column<int>(nullable: true),
                    U_id = table.Column<int>(nullable: true),
                    starToCustomer = table.Column<int>(nullable: true),
                    starToOwner = table.Column<int>(nullable: true),
                    reviewToCutomer = table.Column<string>(unicode: false, nullable: true),
                    reviewToOwner = table.Column<string>(unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingMedia", x => x.b_id);
                    table.ForeignKey(
                        name: "FK_BookingMedia_Media",
                        column: x => x.companyID,
                        principalTable: "Media",
                        principalColumn: "companyID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_BookingMedia_Users",
                        column: x => x.U_id,
                        principalTable: "Users",
                        principalColumn: "U_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookingMedia_companyID",
                table: "BookingMedia",
                column: "companyID");

            migrationBuilder.CreateIndex(
                name: "IX_BookingMedia_U_id",
                table: "BookingMedia",
                column: "U_id");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_companyID",
                table: "Bookings",
                column: "companyID");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_U_id",
                table: "Bookings",
                column: "U_id");

            migrationBuilder.CreateIndex(
                name: "IX_CatererBooking_companyID",
                table: "CatererBooking",
                column: "companyID");

            migrationBuilder.CreateIndex(
                name: "IX_CatererBooking_U_id",
                table: "CatererBooking",
                column: "U_id");

            migrationBuilder.CreateIndex(
                name: "IX_halls_U_id",
                table: "halls",
                column: "U_id");

            migrationBuilder.CreateIndex(
                name: "IX_Media_U_id",
                table: "Media",
                column: "U_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingMedia");

            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "CatererBooking");

            migrationBuilder.DropTable(
                name: "Check");

            migrationBuilder.DropTable(
                name: "Seller");

            migrationBuilder.DropTable(
                name: "Media");

            migrationBuilder.DropTable(
                name: "halls");

            migrationBuilder.DropTable(
                name: "Caterer");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
