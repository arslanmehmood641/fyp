//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EventHub_API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BookingMedia
    {
        public int b_id { get; set; }
        public string prefferedTime { get; set; }
        public Nullable<int> noOfDays { get; set; }
        public Nullable<System.DateTime> eventDate { get; set; }
        public string userName { get; set; }
        public string userEmail { get; set; }
        public string phone { get; set; }
        public string city { get; set; }
        public Nullable<int> companyID { get; set; }
        public Nullable<int> status { get; set; }
    
        public virtual Medium Medium { get; set; }
    }
}
