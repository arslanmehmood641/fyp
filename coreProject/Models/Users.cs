using System;
using System.Collections.Generic;

namespace coreProject.Models
{
    public partial class Users
    {
        public Users()
        {
            BookingMedia = new HashSet<BookingMedia>();
            Bookings = new HashSet<Bookings>();
            CatererBooking = new HashSet<CatererBooking>();
            Halls = new HashSet<Halls>();
            Media = new HashSet<Media>();
        }

        public int UId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? UType { get; set; }
        public ICollection<BookingMedia> BookingMedia { get; set; }
        public ICollection<Bookings> Bookings { get; set; }
        public ICollection<CatererBooking> CatererBooking { get; set; }
        public ICollection<Halls> Halls { get; set; }
        public ICollection<Media> Media { get; set; }
    }
}
