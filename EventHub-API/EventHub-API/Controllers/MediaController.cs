using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
namespace EventHub_API.Controllers
{
    public class MediaController : ApiController
    {
        EventHubEntities db = new EventHubEntities();
        
        [HttpPost]
        public int RegisterMedia(Medium m)
        {
            db.Media.Add(m);
            db.SaveChanges();
            return 1;

        }

        [HttpPost]
        public List<GetMedia_Result> GetMedia()
        {
            return db.GetMedia().ToList();

        }
        public int RegisterMediaBooking(BookingMedia b)
        {
            db.BookingMedias.Add(b);
            db.SaveChanges();
            return 1;

        }
    }
}