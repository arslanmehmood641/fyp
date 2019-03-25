using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
using EventHub_API.Model;
using System.Web;
namespace EventHub_API.Controllers
{
    public class UserController : ApiController
    {
        EventHubEntities db = new EventHubEntities();
        [HttpPost]
        public int GetNumber()
        {
            return 5;
        }

      [HttpPost]
        public List<UserLogin_Result>Login(login l)
        {
            return db.UserLogin(l.email,l.password).ToList();
        }
        [HttpPost]
      public int CreateSeller(Seller seller)
      {

         db.Sellers.Add(seller);
          db.SaveChanges();
          return 1;

      }
        [HttpPost]
        public int RegisterUsers(User u)
        {
          
            u.UserName = u.UserName.Trim();
            u.Password = u.Password.Trim();
            db.Users.Add(u);
            db.SaveChanges();
            return 1;

        }
       
        [HttpPost]
        public int RegisterBooking(Booking b)
        {
            db.Bookings.Add(b);
            db.SaveChanges();
            return 1;

        }
          [HttpPost]
        public UserIndex_Result UserDashboard(string id)
        {
            int id1 = Convert.ToInt32(id);

            UserIndex_Result temp = db.UserIndex(id1).FirstOrDefault();
            return temp;
        }
          [HttpPost]
          public UserIndexMedia_Result UserDashboardMedia(string id)
          {
              int id1 = Convert.ToInt32(id);
              UserIndexMedia_Result temp = db.UserIndexMedia(id1).FirstOrDefault();
              return temp;
          }
          [HttpPost]
          public UserIndexCaterer_Result UserDashboardCaterer(string id)
          {
              int id1 = Convert.ToInt32(id);
              UserIndexCaterer_Result temp = db.UserIndexCaterer(id1).FirstOrDefault();
              return temp;
          }
        [HttpPost]
        public List<Booking> GetBooking()
        {
          return  db.Bookings.ToList();
        }
        [HttpPost]
        public List<hall> GetHalls()
        {
            return db.halls.ToList();

        }
         [HttpPost]
        //______________________________________________________________________________
        //..............................................................................
        //pending Request Hall
        public List<CutomerPendingRequests_Result> CustomerPendingRequestsHall(string id)
        {
            int id1 = Convert.ToInt32(id);
            List<CutomerPendingRequests_Result> temp = db.CutomerPendingRequests(id1).ToList();
            return temp;
        }
        //____________________________________________________________________________
        //............................................................................
        //Continue Working hall

         public List<CustomerApprovedRequests_Result> CustomerApprovedRequestsHall(string id)
         {
             int id1 = Convert.ToInt32(id);
             List<CustomerApprovedRequests_Result> temp = db.CustomerApprovedRequests(id1).ToList();
             return temp;
         }
         public List<CutomerReview_Result>CustomerReview(string id)
         {
             int id1 = Convert.ToInt32(id);
             List<CutomerReview_Result> temp = db.CutomerReview(id1).ToList();
             return temp;
         }
        // Completed working hall
         public List<CustomerCompletedRequests_Result> CustomerCompletedRequestsHall(string id)
         {
             int id1 = Convert.ToInt32(id);
             List<CustomerCompletedRequests_Result> temp = db.CustomerCompletedRequests(id1).ToList();
             return temp;
         }
         public int CompletedRequestHall(string id, string cid,string starCount,string text)
        {
            int id1 = Convert.ToInt32(id);
            int cid1 = Convert.ToInt32(cid);
            int starCount1= Convert.ToInt32(starCount);
            Booking b = db.Bookings.FirstOrDefault(x => x.b_id == id1 && x.companyID == cid1);
            b.starToOwner = starCount1;
            if (text != null)
            {
                b.reviewToOwner = text.Trim();
            }
           
            b.status = 2;
            db.SaveChanges();
            return 1;
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