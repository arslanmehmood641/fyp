using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using coreProject.Models;

namespace coreProject.Controllers.Resources
{
    public class HallResources
    {
        public HallResources()
        {
            Bookings = new Collection<BookingResources>();
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
        public int? PricePerHead { get; set; }
        public int? BCapacity { get; set; }
        public int? PCapacity { get; set; }
        public string Wifi { get; set; }
        public string Dj { get; set; }
        public string BMackup { get; set; }
        public int? UId { get; set; }
        public string ChickenMain { get; set; }
        public string ChickenRice { get; set; }
        public string ChickenSweet { get; set; }
        public string ChickenStarter { get; set; }
        public string MuttonMain { get; set; }
        public string MuttonRice { get; set; }
        public string MuttonSweet { get; set; }
        public string MuttonStarter { get; set; }
        public string BeefMain { get; set; }
        public string BeefRice { get; set; }
        public string BeefSweet { get; set; }
        public string BeefStarter { get; set; }
        public int? ChickenPrice { get; set; }
        public int? MuttonPrice { get; set; }
        public int? BeefPrice { get; set; }

        public UserResources U { get; set; }
        public ICollection<BookingResources> Bookings { get; set; }
    }
}