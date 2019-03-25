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
        
        //_______________________________________________________________________
        //.......................................................................
        //Approve and DisApprove Booking for hall
        public int ApprovePendingRequestHall(string id, string cid)
        {
              int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            Booking b = db.Bookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        public int DisApprovePendingRequestHall(string id, string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            Booking b = db.Bookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 3;
            db.SaveChanges();
            return 1;
        }
        //______________________________________________________________________-
        //.......................................................................

        // Owner Ongoing Working
        public List<OwnerApprovedReqquests_Result> OwnerApprovedRequestsHall(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerApprovedReqquests_Result> temp = db.OwnerApprovedReqquests(id1).ToList();
            return temp;
        }
        //_______________________________________________________________________
        //.......................................................................
        
        public int ApprovePendingRequestMedia(string id, string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            BookingMedia b = db.BookingMedias.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        //________________________________________________________________________
        //........................................................................
        //Completed request hall
        public int CompletedRequestHall(string id, string cid,string starCount,string text)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            int starCount1= Convert.ToInt32(starCount);
            Booking b = db.Bookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.starToCustomer = starCount1;
            if (text != null)
            {
                b.reviewToCutomer = text.Trim();
            }
       
            b.status = 2;
            db.SaveChanges();
            return 1;
        }
        // Work done by owner
        public List<OwnerCompletedReqquests_Result> OwnerCompletedHall(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerCompletedReqquests_Result> temp = db.OwnerCompletedReqquests(id1).ToList();
            return temp;
        }
        //_______________________________________________________________________________
        //...............................................................................
        public int ApprovePendingRequestCaterer(string id, string cid)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            CatererBooking b = db.CatererBookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.status = 1;
            db.SaveChanges();
            return 1;
        }
        //__________________________________________________________________________________
        //...................................................................................
        [HttpPost]
        public OwnerIndex_Result OwnerDashboard(string id)
        {
            int id1 = Convert.ToInt32(id);

            OwnerIndex_Result temp = db.OwnerIndex(id1).FirstOrDefault();
            return temp;
        }

        public OwnerIndexMedia_Result OwnerDashboardMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            OwnerIndexMedia_Result temp = db.OwnerIndexMedia(id1).FirstOrDefault();
            return temp;
        }

        public OwnerIndexCaterer_Result OwnerDashboardCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            OwnerIndexCaterer_Result temp = db.OwnerIndexCaterer(id1).FirstOrDefault();
            return temp;
        }
      //_______________________________________________________________________________________
       //.....................................................................................
        
       
    }
}