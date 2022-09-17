using APILoad.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APILoad.Controllers
{
    public class PackageController : Controller
    {
        [HttpPost("post-package")]
        public void Post(string? name, string? shortInfo, string info, string? script, int  companyId )
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                Package pack = new Package() {Name= name, Info = info, ShortInfo = shortInfo, Script = script, CompanyId = companyId};
                db.Packeges.Add(pack);
                db.SaveChanges();
            }
        }

        [HttpGet("get-package-by-id")]
        public Package Get(int id)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                return db.Packeges.Find(id);
            }
        }

        [HttpGet("get-all-package")]
        public List<Package> GetAll()
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                return db.Packeges.ToList();
            }
        }


        [HttpGet("get-all-apps")]
        public List<int> GetApps(int id)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                var records = db.App_package.Where(p => p.PackageId == id);
                var list = new List<int>();
                foreach(var r in records)
                {
                    list.Add(r.AppId);
                }
                return list;
            }
        }

        [HttpPost("post-add-app-in-package")]
        public void Post(int packageId, int appId)
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
