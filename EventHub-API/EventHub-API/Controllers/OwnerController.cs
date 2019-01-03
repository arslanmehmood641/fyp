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
        public int ApprovePendingRequestHall(string id, string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            Booking b = db.Bookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        public int ApprovePendingRequestMedia(string id, string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            BookingMedia b = db.BookingMedias.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        public int ApprovePendingRequestCaterer(string id, string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            CatererBooking b = db.CatererBookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        public List<OwnerApproveRequestsHall_Result> OwnerApprovedRequestsHall(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerApproveRequestsHall_Result> temp = db.OwnerApproveRequestsHall(id1).ToList();
            return temp;
        }
        public List<OwnerApproveRequestMedia_Result> OwnerApprovedRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerApproveRequestMedia_Result> temp = db.OwnerApproveRequestMedia(id1).ToList();
            return temp;
        }
        public List<OwnerApproveRequestCaterer_Result> OwnerApprovedRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerApproveRequestCaterer_Result> temp = db.OwnerApproveRequestCaterer(id1).ToList();
            return temp;
        }
      
    }
}