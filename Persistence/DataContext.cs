﻿using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Value> Values { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<UserActivity> UserActivities { get; set; }

        //protected can access in defined class and any derived classes from this class
        //override OnModelCreating with the following 
        //when new table is created add the following values
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Value>()
            .HasData(
                new Value { Id = 1, Name = "Value 101" },
                new Value { Id = 2, Name = "Value 102" },
                new Value { Id = 3, Name = "Value 103" }

            );

            builder.Entity<UserActivity>(x => x.HasKey(ua => new { ua.AppUserId, ua.ActivityId }));

            builder.Entity<UserActivity>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.UserActivities)
                .HasForeignKey(u => u.AppUserId);
            
            builder.Entity<UserActivity>()
                .HasOne(u => u.Activity)
                .WithMany(u => u.UserActivities)
                .HasForeignKey(a => a.ActivityId);
        }
    }
}
