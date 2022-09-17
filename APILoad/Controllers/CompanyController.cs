using APILoad.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APILoad.Controllers
{
    public class CompanyController : Controller
    {
        [HttpPost("post-company")]
        public void Post(string? Login, string? Password, string? Info)
        {
            using (ApplicationContext db = new ApplicationContext())
            {

                Company comp = new Company() { Login = Login, Password = Password, Info = Info };
                db.Companies.Add(comp);
                db.SaveChanges();
                // получаем объекты из бд и выводим на консоль

            }
        }


        [HttpGet("get-company-by-id")]
        public Company Get(int id)
        {
            using (ApplicationContext db = new ApplicationContext())
            {


                return db.Companies.Find(id);
            }
        }
    }
}