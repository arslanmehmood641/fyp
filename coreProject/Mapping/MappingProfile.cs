using AutoMapper;
using coreProject.Controllers.Resources;
using coreProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
namespace coreProject.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Halls, HallResources>();
            CreateMap<Media, MediaResources>();
            CreateMap<Caterer, CatererResources>();
            CreateMap<Bookings, BookingResources>();
            CreateMap<BookingMedia, BookingMediaResources>();
            CreateMap<CatererBooking, CatererBookingResources>();
            CreateMap<Users, UserResources>();
            CreateMap<Check, CheckResources>();
        }
    }
}