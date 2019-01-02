using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
namespace EventHub_API.Controllers
{
    public class CatererController : ApiController
    {
        EventHubEntities db = new EventHubEntities();
        [HttpPost]
        public int RegisterCaterer(Caterer c)
        {
            db.Caterers.Add(c);
            db.SaveChanges();
            return 1;
        }
        [HttpPost]
      
        public List<GetCaterer_Result> GetCaterer()
        {
            return db.GetCaterer().ToList();

        }
        public int RegisterCatererBooking(CatererBooking b)
        {
            db.CatererBookings.Add(b);
            db.SaveChanges();
            return 1;

        }
    }
}
