using System;
using System.Collections.Generic;

namespace coreProject.Models
{
    public partial class Caterer
    {
        public Caterer()
        {
            CatererBooking = new HashSet<CatererBooking>();
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
        public bool? Tent { get; set; }
        public bool? Generator { get; set; }
        public bool? Heater { get; set; }
        public bool? ServingStaff { get; set; }
        public bool? Lights { get; set; }
        public bool? StageDecorations { get; set; }
        public bool? Cooking { get; set; }
        public bool? BridalRoom { get; set; }
        public bool? AirCondition { get; set; }
        public bool? ValetParking { get; set; }
        public bool? Wifi { get; set; }
        public bool? Dj { get; set; }
        public bool? Decoration { get; set; }
        public int? UId { get; set; }

        public ICollection<CatererBooking> CatererBooking { get; set; }
    }
}
