using System;
using System.Collections.Generic;

namespace coreProject.Models
{
    public partial class Media
    {
        public Media()
        {
            BookingMedia = new HashSet<BookingMedia>();
        }

        public int CompanyId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime? StartDate { get; set; }
        public TimeSpan? TotalTime { get; set; }
        public int? StreetNo { get; set; }
        public int? HouseNo { get; set; }
        public string TownName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public bool? DroneCamera { get; set; }
        public bool? HdCam { get; set; }
        public int? NoOfCams { get; set; }
        public bool? Albums { get; set; }
        public bool? PhotoGraphy { get; set; }
        public bool? FilmGraphy { get; set; }
        public int? UId { get; set; }
        public int? CamsOne { get; set; }
        public int? PriceOne { get; set; }
        public int? DroneOne { get; set; }
        public int? AlbumOne { get; set; }
        public int? CamsTwo { get; set; }
        public int? PriceTwo { get; set; }
        public int? DroneTwo { get; set; }
        public int? AlbumTwo { get; set; }
        public int? CamsThree { get; set; }
        public int? PriceThree { get; set; }
        public int? DroneThree { get; set; }
        public int? AlbumThree { get; set; }

        public Users U { get; set; }
        public ICollection<BookingMedia> BookingMedia { get; set; }
    }
}
