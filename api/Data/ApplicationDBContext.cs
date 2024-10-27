using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext(DbContextOptions dbContextOptions) : IdentityDbContext<AppUser>(dbContextOptions)
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Amenity> Amenities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // One-to-One between Booking and Payment
            modelBuilder.Entity<Booking>()
                .HasOne(b => b.Payment)
                .WithOne(p => p.Booking)
                .HasForeignKey<Payment>(p => p.BookingId)
                .OnDelete(DeleteBehavior.Cascade);

            // This configuration tells EF Core how to define composite keys for Identity entities.
            modelBuilder.Entity<IdentityUserLogin<string>>()
                .HasKey(l => new { l.LoginProvider, l.ProviderKey });

            modelBuilder.Entity<IdentityUserRole<string>>()
                .HasKey(r => new { r.UserId, r.RoleId });

            modelBuilder.Entity<IdentityUserToken<string>>()
                .HasKey(t => new { t.UserId, t.LoginProvider, t.Name });
        }
    }


    // protected override void OnModelCreating(ModelBuilder builder) 
    // {
    //     base.OnModelCreating(builder);

    //     List<IdentityRole> roles =
    //     [
    //         new IdentityRole
    //         {
    //             Name = "Admin",
    //             NormalizedName = "ADMIN"
    //         },
    //         new IdentityRole
    //         {
    //             Name = "User",
    //             NormalizedName = "USER"
    //         }
    //     ];
    //     builder.Entity<IdentityRole>().HasData(roles);
    // }
}
