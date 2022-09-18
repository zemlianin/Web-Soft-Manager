using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;

namespace WebRazor.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> OnGet()
        {
            var request = new RequestSender();

            var b = JsonSerializer.Deserialize<Byte[]>(await request.Get("http://APILoad/get-app-executable?services=winget%20install%20Notepad%2B%2B.Notepad%2B%2B"));
            //System.IO.File.WriteAllText("yy", "--");
            System.IO.File.WriteAllBytes("wwwroot/Files/hello.cmd", b);
            return File("Files/hello.cmd", "text/plain", "helloCMD.cmd");

        }
    }
}