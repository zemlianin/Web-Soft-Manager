namespace APILoad.Models
{
    public class Package
    {
        public int Id { get; set; }
        public string? Info { get; set; }
        public string? Script { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; }

        public List<App> Apps { get; set; } = new List<App>();
    }
}
