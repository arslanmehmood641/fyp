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
        //OOOOOOWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNEEEEEEEEEEEERRRRRRRRRRRRRR
        //pending
        public List<OwnerPendingReqquestsCaterer_Result> OwnerPendingRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerPendingReqquestsCaterer_Result> temp = db.OwnerPendingReqquestsCaterer(id1).ToList();
            return temp;
        }
        //Continue
        public List<OwnerContinueReqquestsCaterer_Result> OwnerApprovedRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerContinueReqquestsCaterer_Result> temp = db.OwnerContinueReqquestsCaterer(id1).ToList();
            return temp;
        }
        //Completed
        public List<OwnerCompletedReqquestsCaterer_Result> OwnerCompletedRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerCompletedReqquestsCaterer_Result> temp = db.OwnerCompletedReqquestsCaterer(id1).ToList();
            return temp;
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
        public int CompletedRequestCaterer(string id, string cid, string starCount, string text)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            int starCount1 = Convert.ToInt32(starCount);
            CatererBooking b = db.CatererBookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.starToCustomer = starCount1;
            if (text != null)
            {
                b.reviewToCustomer = text.Trim();
            }
            b.status = 2;
            db.SaveChanges();
            return 1;
        }
        //CCCCCCCCCCCUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTOOOOOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMMMEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
        //pending
        public List<CustomerPendingRequestsCaterer_Result> CustomerPendingRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<CustomerPendingRequestsCaterer_Result> temp = db.CustomerPendingRequestsCaterer(id1).ToList();
            return temp;
        }
        //Continue
        public List<CustomerContinueRequestsCaterer_Result> CustomerApprovedRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<CustomerContinueRequestsCaterer_Result> temp = db.CustomerContinueRequestsCaterer(id1).ToList();
            return temp;
        }
        //Completed
        public List<CustomerCompletedRequestsCaterer_Result> CustomerCompletedRequestsCaterer(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<CustomerCompletedRequestsCaterer_Result> temp = db.CustomerCompletedRequestsCaterer(id1).ToList();
            return temp;
        }
        public int SubmitReview(string id, string cid, string starCount, string text)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            int starCount1 = Convert.ToInt32(starCount);
            CatererBooking b = db.CatererBookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.starToOwner = starCount1;
            if (text != null)
            {
                b.reviewToOwner = text.Trim();
            }

            b.status = 2;
            db.SaveChanges();
            return 1;
        }
    }
}
