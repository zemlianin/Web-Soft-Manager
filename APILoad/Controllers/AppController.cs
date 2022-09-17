using APILoad.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APILoad.Controllers
{
    public class AppController : Controller
    {
        [HttpPost("post-app")]
        public void Post(string? instalCommand, string? info)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                App app = new App() {InstalCommand = instalCommand, Info = info };
                db.Apps.Add(app);
                db.SaveChanges();
            }
        }

        [HttpGet("get-app-by-id")]
        public App Get(int id)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                return db.Apps.Find(id);
            }
        }

        [HttpPost("post-add-package-in-app")]
        public void Post(int appId,int packageId)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                var package = db.Packeges.Find(packageId);
                var app = db.Apps.Find(appId);
                db.App_package.Add(new App_package() { AppId = appId, PackageId = packageId });
                db.SaveChanges();
            }
        }

    }
}
