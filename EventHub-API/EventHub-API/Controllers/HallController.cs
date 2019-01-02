using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
namespace EventHub_API.Controllers
{
    public class HallController : ApiController
    {
        // GET api/<controller>
        EventHubEntities db = new EventHubEntities();
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        public int RegisterHall(hall h)
        {
            db.halls.Add(h);
            db.SaveChanges();
            return 1;
        }
        public int ApprovePendingRequest(string id,string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            Booking b = db.Bookings.FirstOrDefault(x => x.b_id == id1 && x.companyID==cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        [HttpPost]
        public List<GetHalls_Result> GetHalls()
        {
            return db.GetHalls().ToList();

        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}