using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;
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

        public async Task OnGet()
        {
            var request = new RequestSender();

            ViewData["Bytes"] = JsonSerializer.Deserialize<Byte[]>(await request.Get("http://APILoad/get-app-executable?services=winget%20install%20Notepad%2B%2B.Notepad%2B%2B"));



        }
    }
}