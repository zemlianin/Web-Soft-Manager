using APILoad.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Data.SqlTypes;

namespace APILoad.Controllers
{
    public class UserController : Controller
    {
        [HttpPost("Post-user")]
        public string Post(string? Login, string? Password, string? Info, int idCompany)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                var comp = db.Companies.Find(idCompany);
                User user = new User() {Login=Login,Password=Password,Info=Info,Company=comp };
                db.Users.Add(user);
                db.SaveChanges();
                return comp.Login;
               
            }
        }

        [HttpGet("get-user-by-id")]
        public User Get(int id)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                return db.Users.Find(id);
            }
        }

    }
}
