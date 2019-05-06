using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace coreProject.Models
{
    public partial class EventHubContext : DbContext
    {
        public EventHubContext()
        {
        }

        public EventHubContext(DbContextOptions<EventHubContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BookingMedia> BookingMedia { get; set; }
        public virtual DbSet<Bookings> Bookings { get; set; }
        public virtual DbSet<Caterer> Caterer { get; set; }
        public virtual DbSet<CatererBooking> CatererBooking { get; set; }
        public virtual DbSet<Check> Check { get; set; }
        public virtual DbSet<Halls> Halls { get; set; }
        public virtual DbSet<Media> Media { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=ARSLAN\\SQLEXPRESS;Database=EventHub;Trusted_Connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BookingMedia>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId).HasColumnName("b_id");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.EventDate)
                    .HasColumnName("eventDate")
                    .HasColumnType("date");

                entity.Property(e => e.NoOfDays).HasColumnName("noOfDays");

                entity.Property(e => e.Packege).HasColumnName("packege");

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(50);

                entity.Property(e => e.PrefferedTime)
                    .HasColumnName("prefferedTime")
                    .HasMaxLength(50);

                entity.Property(e => e.ReviewToCutomer)
                    .HasColumnName("reviewToCutomer")
                    .IsUnicode(false);

                entity.Property(e => e.ReviewToOwner)
                    .HasColumnName("reviewToOwner")
                    .IsUnicode(false);

                entity.Property(e => e.StarToCustomer).HasColumnName("starToCustomer");

                entity.Property(e => e.StarToOwner).HasColumnName("starToOwner");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.Property(e => e.UserEmail)
                    .HasColumnName("userEmail")
                    .HasMaxLength(50);

                entity.Property(e => e.UserName)
                    .HasColumnName("userName")
                    .HasMaxLength(50);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.BookingMedia)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_BookingMedia_Media");

                entity.HasOne(d => d.U)
                    .WithMany(p => p.BookingMedia)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("FK_BookingMedia_Users");
            });

            modelBuilder.Entity<Bookings>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId).HasColumnName("b_id");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(20);

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.EventDate)
                    .HasColumnName("eventDate")
                    .HasColumnType("date");

                entity.Property(e => e.NoOfGuests).HasColumnName("noOfGuests");

                entity.Property(e => e.Packege).HasColumnName("packege");

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(20);

                entity.Property(e => e.PrefferedTime)
                    .HasColumnName("prefferedTime")
                    .HasMaxLength(10);

                entity.Property(e => e.ReviewToCutomer)
                    .HasColumnName("reviewToCutomer")
                    .IsUnicode(false);

                entity.Property(e => e.ReviewToOwner)
                    .HasColumnName("reviewToOwner")
                    .IsUnicode(false);

                entity.Property(e => e.StarToCustomer).HasColumnName("starToCustomer");

                entity.Property(e => e.StarToOwner).HasColumnName("starToOwner");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.Property(e => e.UserEmail)
                    .HasColumnName("userEmail")
                    .HasMaxLength(50);

                entity.Property(e => e.UserName)
                    .HasColumnName("userName")
                    .HasMaxLength(50);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_Bookings_halls");

                entity.HasOne(d => d.U)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("FK_Bookings_Users");
            });

            modelBuilder.Entity<Caterer>(entity =>
            {
                entity.HasKey(e => e.CompanyId);

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.AirCondition).HasColumnName("airCondition");

                entity.Property(e => e.BridalRoom).HasColumnName("bridalRoom");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.Cooking).HasColumnName("cooking");

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(50);

                entity.Property(e => e.Decoration).HasColumnName("decoration");

                entity.Property(e => e.Dj).HasColumnName("dj");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(50);

                entity.Property(e => e.Generator).HasColumnName("generator");

                entity.Property(e => e.Heater).HasColumnName("heater");

                entity.Property(e => e.HouseNo).HasColumnName("houseNo");

                entity.Property(e => e.Lights).HasColumnName("lights");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.ServingStaff).HasColumnName("servingStaff");

                entity.Property(e => e.StageDecorations).HasColumnName("stageDecorations");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StreetNo).HasColumnName("streetNo");

                entity.Property(e => e.Tent).HasColumnName("tent");

                entity.Property(e => e.TotalTime).HasColumnName("totalTime");

                entity.Property(e => e.TownName)
                    .HasColumnName("townName")
                    .HasMaxLength(60);

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.Property(e => e.ValetParking).HasColumnName("valetParking");

                entity.Property(e => e.Wifi).HasColumnName("wifi");
            });

            modelBuilder.Entity<CatererBooking>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId).HasColumnName("b_id");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.EventDate)
                    .HasColumnName("eventDate")
                    .HasColumnType("date");

                entity.Property(e => e.NoOfDays).HasColumnName("noOfDays");

                entity.Property(e => e.Packege).HasColumnName("packege");

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(50);

                entity.Property(e => e.PrefferedTime)
                    .HasColumnName("prefferedTime")
                    .HasMaxLength(50);

                entity.Property(e => e.ReviewToCustomer)
                    .HasColumnName("reviewToCustomer")
                    .IsUnicode(false);

                entity.Property(e => e.ReviewToOwner)
                    .HasColumnName("reviewToOwner")
                    .IsUnicode(false);

                entity.Property(e => e.StarToCustomer).HasColumnName("starToCustomer");

                entity.Property(e => e.StarToOwner).HasColumnName("starToOwner");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.Property(e => e.UserEmail)
                    .HasColumnName("userEmail")
                    .HasMaxLength(50);

                entity.Property(e => e.UserName)
                    .HasColumnName("userName")
                    .HasMaxLength(50);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CatererBooking)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_CatererBooking_Caterer");

                entity.HasOne(d => d.U)
                    .WithMany(p => p.CatererBooking)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("FK_CatererBooking_Users");
            });

            modelBuilder.Entity<Check>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<Halls>(entity =>
            {
                entity.HasKey(e => e.CompanyId);

                entity.ToTable("halls");

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.BCapacity).HasColumnName("b_capacity");

                entity.Property(e => e.BMackup)
                    .HasColumnName("b_mackup")
                    .HasMaxLength(10);

                entity.Property(e => e.BeefMain)
                    .HasColumnName("beef_main")
                    .HasMaxLength(50);

                entity.Property(e => e.BeefPrice).HasColumnName("beefPrice");

                entity.Property(e => e.BeefRice)
                    .HasColumnName("beef_rice")
                    .HasMaxLength(50);

                entity.Property(e => e.BeefStarter)
                    .HasColumnName("beef_starter")
                    .HasMaxLength(50);

                entity.Property(e => e.BeefSweet)
                    .HasColumnName("beef_sweet")
                    .HasMaxLength(50);

                entity.Property(e => e.ChickenMain)
                    .HasColumnName("chicken_main")
                    .HasMaxLength(50);

                entity.Property(e => e.ChickenPrice).HasColumnName("chickenPrice");

                entity.Property(e => e.ChickenRice)
                    .HasColumnName("chicken_rice")
                    .HasMaxLength(50);

                entity.Property(e => e.ChickenStarter)
                    .HasColumnName("chicken_starter")
                    .HasMaxLength(50);

                entity.Property(e => e.ChickenSweet)
                    .HasColumnName("chicken_sweet")
                    .HasMaxLength(50);

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(50);

                entity.Property(e => e.Dj)
                    .HasColumnName("dj")
                    .HasMaxLength(10);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(50);

                entity.Property(e => e.HouseNo).HasColumnName("houseNo");

                entity.Property(e => e.MuttonMain)
                    .HasColumnName("mutton_main")
                    .HasMaxLength(50);

                entity.Property(e => e.MuttonPrice).HasColumnName("muttonPrice");

                entity.Property(e => e.MuttonRice)
                    .HasColumnName("mutton_rice")
                    .HasMaxLength(50);

                entity.Property(e => e.MuttonStarter)
                    .HasColumnName("mutton_starter")
                    .HasMaxLength(50);

                entity.Property(e => e.MuttonSweet)
                    .HasColumnName("mutton_sweet")
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.PCapacity).HasColumnName("p_capacity");

                entity.Property(e => e.PricePerHead).HasColumnName("price_per_head");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StreetNo).HasColumnName("streetNo");

                entity.Property(e => e.TotalTime).HasColumnName("totalTime");

                entity.Property(e => e.TownName)
                    .HasColumnName("townName")
                    .HasMaxLength(50);

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.Property(e => e.Wifi)
                    .HasColumnName("wifi")
                    .HasMaxLength(10);

                entity.HasOne(d => d.U)
                    .WithMany(p => p.Halls)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("FK_halls_Users");
            });

            modelBuilder.Entity<Media>(entity =>
            {
                entity.HasKey(e => e.CompanyId);

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.Albums).HasColumnName("albums");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(50);

                entity.Property(e => e.DroneCamera).HasColumnName("droneCamera");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(50);

                entity.Property(e => e.FilmGraphy).HasColumnName("filmGraphy");

                entity.Property(e => e.HdCam).HasColumnName("hdCam");

                entity.Property(e => e.HouseNo).HasColumnName("houseNo");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.NoOfCams).HasColumnName("noOfCams");

                entity.Property(e => e.PhotoGraphy).HasColumnName("photoGraphy");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.StreetNo).HasColumnName("streetNo");

                entity.Property(e => e.TotalTime).HasColumnName("totalTime");

                entity.Property(e => e.TownName)
                    .HasColumnName("townName")
                    .HasMaxLength(50);

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.HasOne(d => d.U)
                    .WithMany(p => p.Media)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("FK_Media_Users");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UId);

                entity.Property(e => e.UId).HasColumnName("U_id");

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.UType).HasColumnName("U_type");

                entity.Property(e => e.UserName).HasMaxLength(50);
            });
        }
    }
}
