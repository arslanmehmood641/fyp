using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using coreProject.Controllers.Resources;
using coreProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace coreProject.Controllers
{
    public class HallController : Controller
    {
        private readonly EventHubContext context;
        private readonly IMapper mapper;
        public HallController(EventHubContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet("/api/halls")]
        public async Task<List<HallResources>> GetHalls()
        {
            var H = await context.Halls.ToListAsync();
            return Mapper.Map<List<Halls>, List<HallResources>>(H);
        }
        [HttpGet("/api/users")]
        public async Task<IActionResult> GetUser()
        {
            var H = await context.Users.ToListAsync();
            var u = Mapper.Map<List<Users>, List<UserResources>>(H);
            return Ok(u);
        }
        [HttpGet("/api/Onehall/{companyId}")]
        public async Task<HallResources> getHall(int companyId)
        {
            var H = await context.Halls.FirstOrDefaultAsync(h => h.CompanyId == companyId);
            return mapper.Map<Halls, HallResources>(H);
        }
        [HttpGet("/api/pendingbookings/{id}")]
        public ActionResult GetPendingBooking(int id)
        {
            var book = from b in context.Bookings
                       join u in context.Users
                       on b.UId equals u.UId
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       where u.UId == id && b.Status == 0
                       select new
                       {
                           bookerName = b.UserName,
                           hallName = h.Name,
                           userName = u.UserName,
                           cid = h.CompanyId,
                           bookingId = b.BId
                       };

            return Ok(book);
        }
        [HttpGet("/api/approvedbookings/{id}")]
        public ActionResult GetContinueBooking(int id)
        {
            var book = from b in context.Bookings
                       join u in context.Users
                       on b.UId equals u.UId
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       where u.UId == id && b.Status == 1
                       select new
                       {
                           bookerName = b.UserName,
                           hallName = h.Name,
                           userName = u.UserName,
                           cid = h.CompanyId,
                           bookingId = b.BId,
                           status = b.Status,
                           Email = h.Email,
                           Mobile = b.Phone,
                           EventDate = b.EventDate,
                           Guest = b.NoOfGuests

                       };

            return Ok(book);
        }
        [HttpGet("/api/completedbookings/{id}")]
        public ActionResult GetCompletedBooking(int id)
        {
            var book = from b in context.Bookings
                       join u in context.Users
                       on b.UId equals u.UId
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       where u.UId == id && b.Status == 2
                       select new
                       {
                           bookerName = b.UserName,
                           hallName = h.Name,
                           userName = u.UserName,
                           cid = h.CompanyId,
                           bookingId = b.BId,
                           status = b.Status,
                           Email = h.Email,
                           Mobile = b.Phone,
                           EventDate = b.EventDate,
                           Guest = b.NoOfGuests
                       };

            return Ok(book);
        }
        [HttpGet("/api/pendingbookingsowner/{id}")]
        public ActionResult GetPendingBookingOwner(int id)
        {
            var book = from b in context.Bookings
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       join u in context.Users
                       on h.UId equals u.UId
                       where u.UId == id && b.Status == 0
                       select new
                       {
                           bookerName = b.UserName,
                           hallName = h.Name,
                           userName = u.UserName,
                           cid = h.CompanyId,
                           bookingId = b.BId,
                           status = b.Status,
                           Email = h.Email,
                           Mobile = b.Phone,
                           EventDate = b.EventDate,
                           Guest = b.NoOfGuests

                       };

            return Ok(book);
        }
        [HttpPost("/api/packegedetail")]
        public ActionResult GetPackegeDetail([FromBody]HelperResources p)
        {
            var book = from b in context.Bookings
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       join u in context.Users
                       on h.UId equals u.UId
                       where u.UId == p.id2 && b.BId == p.id1
                       select new
                       {
                           Guset = b.NoOfGuests,
                           Packege = b.Packege,
                           ChickenMain = h.ChickenMain,
                           ChickenRice = h.ChickenRice,
                           ChickenSweet = h.ChickenSweet,
                           ChickenStarter = h.ChickenStarter,
                           MuttonMain = h.MuttonMain,
                           MuttonRice = h.MuttonRice,
                           MuttonSweet = h.MuttonSweet,
                           MuttonStarter = h.MuttonStarter,
                           BeefMain = h.BeefMain,
                           BeefRice = h.BeefRice,
                           BeefSweet = h.BeefSweet,
                           BeefStarter = h.BeefStarter,
                           ChickenPrice = h.ChickenPrice,
                           MuttonPrice = h.MuttonPrice,
                           BeefPrice = h.BeefPrice,
                       };

            return Ok(book);
        }
        [HttpGet("/api/approvedbookingsowner/{id}")]
        public ActionResult GetContinueBookingOwner(int id)
        {
            var book = from b in context.Bookings
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       join u in context.Users
                       on h.UId equals u.UId
                       where u.UId == id && b.Status == 1
                       select new
                       {
                           bookerName = b.UserName,
                           hallName = h.Name,
                           userName = u.UserName,
                           cid = h.CompanyId,
                           bookingId = b.BId,
                           status = b.Status,
                           Email = h.Email,
                           Mobile = b.Phone,
                           EventDate = b.EventDate,
                           Guest = b.NoOfGuests
                       };
            return Ok(book);
        }
        [HttpGet("/api/completedbookingsowner/{id}")]

        public ActionResult GetCompletedBookingOwner(int id)
        {
            var book = from b in context.Bookings
                       join h in context.Halls
                       on b.CompanyId equals h.CompanyId
                       join u in context.Users
                       on h.UId equals u.UId
                       where u.UId == id && b.Status == 2
                       select new
                       {
                           bookerName = b.UserName,
                           hallName = h.Name,
                           userName = u.UserName,
                           cid = h.CompanyId,
                           bookingId = b.BId,
                           status = b.Status,
                           Email = h.Email,
                           Mobile = b.Phone,
                           EventDate = b.EventDate,
                           Guest = b.NoOfGuests
                       };
            return Ok(book);
        }

        [HttpPost("/api/approvedbooking")]

        public ActionResult ApprovedBooking([FromBody]HelperResources c)
        {
            Bookings booking = context.Bookings.FirstOrDefault(x => x.BId == c.id1 && x.CompanyId == c.id2);
            booking.Status = 1;
            context.SaveChanges();
            return Ok(booking);
        }
        [HttpPost("/api/markcompleted")]

        public ActionResult MarkComplete([FromBody]HelperResources c)
        {
            Bookings booking = context.Bookings.FirstOrDefault(x => x.BId == c.id1 && x.CompanyId == c.id2);
            booking.Status = 2;
            context.SaveChanges();
            return Ok(booking);
        }
        [HttpGet("/api/disapprovedbooking/{id}")]

        public ActionResult DisApprovedBooking(int id)
        {
            Bookings booking = context.Bookings.FirstOrDefault(x => x.UId == id);
            booking.Status = 3;
            context.SaveChanges();
            return Ok(booking);
        }


        [HttpGet("/api/Allvenues/{id}")]
        public ActionResult AllVenues(int id)
        {
            var hall = from h in context.Halls
                       join u in context.Users
                       on h.UId equals u.UId
                       where u.UId == id
                       select new
                       {
                           hallName = h.Name,
                           HallEmail = h.Email,
                           userName = u.UserName
                       };

            return Ok(hall);
        }
        [HttpPost("api/Hallbooking")]
        public async Task<IActionResult> PutBooking([FromBody]BookingResources b)
        {
            b.Status = 0;
            var booking = mapper.Map<BookingResources, Bookings>(b);
            context.Bookings.Add(booking);
            await context.SaveChangesAsync();
            return Ok(booking);
        }
        [HttpPost("api/Hallregister")]
        public async Task<IActionResult> PutHall([FromBody]HallResources h)
        {
            var hall = mapper.Map<HallResources, Halls>(h);
            context.Halls.Add(hall);
            await context.SaveChangesAsync();
            return Ok(hall);
        }

    }
}