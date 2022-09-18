using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace APILoad.Controllers {
    public class SampleController : Controller {
        private static Process s_process = new();
        private static readonly string s_compiler = "C:/Windows/Microsoft.NET/Framework64/v3.5/csc.exe";  // TODO: Maybe edit paths
        private static readonly string s_source = Environment.CurrentDirectory + "/Models/Sample/Sample.cs.txt"; 
        private static readonly string s_executable = Environment.CurrentDirectory + "/Models/Sample/Sample.cs.exe";
        private static readonly string[] s_initial = System.IO.File.ReadAllLines(s_source);

        [HttpGet("get-executable")]
        public string Get(List<string> services) {
            AddServicesToSample(s_initial.ToList());


            s_process.StartInfo.UseShellExecute = false;
            s_process.StartInfo.CreateNoWindow = true;
            s_process.StartInfo.RedirectStandardOutput = true;
            s_process.StartInfo.RedirectStandardError = true;
            s_process.StartInfo.FileName = s_compiler;
            s_process.StartInfo.Arguments = $"\"{s_source}\" /t:exe /out:\"{s_executable}\"";

            try {
                s_process.Start();
            }
            catch {
                return null;
            }

            BackupSample();
            return s_executable;
        } 

        private void AddServicesToSample(List<string> services) {
            List<string> mut = new();
            mut.AddRange(s_initial);
            foreach (var service in services) {
                mut.Insert(13, service);
            }
            System.IO.File.WriteAllLines(s_source, mut);
        }

        private void BackupSample() {
            System.IO.File.WriteAllLines(s_source, s_initial);
        }
    }
}
