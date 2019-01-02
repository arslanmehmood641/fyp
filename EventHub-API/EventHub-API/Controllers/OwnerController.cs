using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
namespace EventHub_API.Controllers
{
    public class OwnerController : ApiController
    {
        EventHubEntities db = new EventHubEntities();
        // GET api/<controller>
        [HttpPost]
        public List<OwnerPendingReqquests_Result> OwnerPendingRequestsHall(string id)
        {
             int id1 = Convert.ToInt32(id);
          
               List<OwnerPendingReqquests_Result> temp= db.OwnerPendingReqquests(id1).ToList();
               return temp;
        }
        public List<OwnerPendingRequestMedia_Result> OwnerPendingRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerPendingRequestMedia_Result> temp = db.OwnerPendingRequestMedia(id1).ToList();
            return temp;
        }
        public List<OwnerPendingRequestCaterer_Result> OwnerPendingRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerPendingRequestCaterer_Result> temp = db.OwnerPendingRequestCaterer(id1).ToList();
            return temp;
        }
      
    }
}