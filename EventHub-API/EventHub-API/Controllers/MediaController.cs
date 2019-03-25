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
        //OOOOOOWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNEEEEEEEEEEEERRRRRRRRRRRRRR
        //pending
        public List<OwnerPendingReqquestsMedia_Result> OwnerPendingRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerPendingReqquestsMedia_Result> temp = db.OwnerPendingReqquestsMedia(id1).ToList();
            return temp;
        }
        //Continue
        public List<OwnerApprovedReqquestsMedia_Result> OwnerApprovedRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerApprovedReqquestsMedia_Result> temp = db.OwnerApprovedReqquestsMedia(id1).ToList();
            return temp;
        }
        //Completed
        public List<OwnerCompletedReqquestsMedia_Result> OwnerCompletedRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<OwnerCompletedReqquestsMedia_Result> temp = db.OwnerCompletedReqquestsMedia(id1).ToList();
            return temp;
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
        public int CompletedRequestMedia(string id, string cid, string starCount, string text)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            int starCount1 = Convert.ToInt32(starCount);
            BookingMedia b = db.BookingMedias.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.starToCustomer = starCount1;
            if (text != null)
            {
                b.reviewToCutomer = text.Trim();
            }
            b.status = 2;
            db.SaveChanges();
            return 1;
        }
        //CCCCCCCCCCCUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTOOOOOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMMMEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
        //pending
        public List<CustomerPendingRequestsMedia_Result> CustomerPendingRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<CustomerPendingRequestsMedia_Result> temp = db.CustomerPendingRequestsMedia(id1).ToList();
            return temp;
        }
        //Continue
        public List<CustomerApprovedRequestsMedia_Result> CustomerApprovedRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<CustomerApprovedRequestsMedia_Result> temp = db.CustomerApprovedRequestsMedia(id1).ToList();
            return temp;
        }
        //Completed
        public List<CustomerCompletedRequestsMedia_Result> CustomerCompletedRequestsMedia(string id)
        {
            int id1 = Convert.ToInt32(id);

            List<CustomerCompletedRequestsMedia_Result> temp = db.CustomerCompletedRequestsMedia(id1).ToList();
            return temp;
        }
        public int SubmitReview(string id, string cid, string starCount, string text)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            int starCount1 = Convert.ToInt32(starCount);
            BookingMedia b = db.BookingMedias.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
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