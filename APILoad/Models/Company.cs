namespace APILoad.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string? Login { get; set; }
        public string? Password { get; set; }
        public string? Info { get; set; }
        public List<User> Users { get; set; } = new List<User>();
        public List<Package> Packages { get; set; } = new List<Package>();


    }
}
