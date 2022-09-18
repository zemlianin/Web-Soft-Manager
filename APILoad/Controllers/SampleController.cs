using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APILoad.Controllers {
    public class SampleController : Controller {
        static readonly string s_path = "download.txt";
        static readonly string s_name = "download.cmd";

        [HttpGet("get-app-executable")]
        public byte[] Get(List<string> services) {
            System.IO.File.WriteAllLines(s_path, services);
            byte[] bytes = System.IO.File.ReadAllBytes(s_path);
            return bytes;
        }
    }
}
