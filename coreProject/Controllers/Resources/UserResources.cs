using System.Collections.Generic;

namespace coreProject.Controllers.Resources
{
    public class UserResources
    {
        public UserResources()
        {
            BookingMedia = new HashSet<BookingMediaResources>();
            Bookings = new HashSet<BookingResources>();
            CatererBooking = new HashSet<CatererBookingResources>();
            Halls = new HashSet<HallResources>();
            Media = new HashSet<MediaResources>();
        }

        public int UId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? UType { get; set; }
        public ICollection<BookingMediaResources> BookingMedia { get; set; }
        public ICollection<BookingResources> Bookings { get; set; }
        public ICollection<CatererBookingResources> CatererBooking { get; set; }
        public ICollection<HallResources> Halls { get; set; }
        public ICollection<MediaResources> Media { get; set; }
    }
}