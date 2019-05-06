using System;
using coreProject.Models;

namespace coreProject.Controllers.Resources
{
    public class BookingResources
    {
        public int BId { get; set; }
        public string PrefferedTime { get; set; }
        public int? NoOfGuests { get; set; }
        public DateTime? EventDate { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public int? CompanyId { get; set; }
        public int? Status { get; set; }
        public int? Packege { get; set; }
        public int? UId { get; set; }
        public int? StarToCustomer { get; set; }
        public int? StarToOwner { get; set; }
        public string ReviewToCutomer { get; set; }
        public string ReviewToOwner { get; set; }

        public HallResources Company { get; set; }
        public UserResources U { get; set; }

        
    }

}