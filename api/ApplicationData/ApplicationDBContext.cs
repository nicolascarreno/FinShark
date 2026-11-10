using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.ApplicationData
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {
            
        }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            List<IdentityRole> roles = new List<IdentityRole>
            {
              new IdentityRole
              {
                  Id = "e436aedb-7c87-4ac1-8086-4b57300eb84d",
                  ConcurrencyStamp = "0b0e04a4-9f5c-4129-b593-aa7ce4e29e4f",
                  Name = "Admin",
                  NormalizedName= "ADMIN"
              },
              new IdentityRole
              {
                  Id = "57ffc7cf-acd9-44d2-8d42-58ee38f74d86",
                  ConcurrencyStamp = "08e32247-d690-40f9-bdc8-4f98b4c71bbe",
                  Name = "User",
                  NormalizedName= "USER"
              }   
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}