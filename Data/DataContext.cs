using ShopWebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ShopWebApp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
