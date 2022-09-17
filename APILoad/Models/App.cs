namespace APILoad.Models
{
    public class App
    {
        public int Id { get; set; }
        public string? InstalCommand { get; set; }
        public string? Info { get; set; }
        public List<Package>? Packages { get; set; } = new List<Package>();
    }
}
