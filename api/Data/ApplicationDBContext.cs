using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
}