using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
namespace EventHub_API.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        EventHubEntities db = new EventHubEntities();
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
       
        // GET api/values/5
        public Seller GetNumber()
        {
          //int   id = 1;
          return db.Sellers.FirstOrDefault();
        }

        // POST api/values
        [HttpGet]
     

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
