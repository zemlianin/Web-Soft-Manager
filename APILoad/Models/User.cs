namespace APILoad.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Login { get; set; }
        public string? Password { get; set; }
        public string? Info { get; set; }
        public Company? Company { get; set; }
    }
}
