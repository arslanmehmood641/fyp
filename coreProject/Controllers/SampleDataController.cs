using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace coreProject.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        EventHubContext db = new EventHubContext();
        int a = 5;
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public Models.Bookings WeatherForecasts()
        {
            return db.Bookings.FirstOrDefault();
        }

       
    }
}
