using Microsoft.EntityFrameworkCore;

namespace APILoad.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Package> Packeges { get; set; }
        public DbSet<App> Apps { get; set; }
        public DbSet<App_package> App_package { get; set; }


        public ApplicationContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=postgres;Port=5432;User Id=app;Password=app;Database=mydbname2;");
        }
    }
}
