using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventHub_API.Models;
using EventHub_API.Model;
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
        public List<Booking> GetBooking()
        {
          return  db.Bookings.ToList();
        }
        [HttpPost]
        public List<hall> GetHalls()
        {
            return db.halls.ToList();

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