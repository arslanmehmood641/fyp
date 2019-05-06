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
    public class CateringController
    {
        private readonly EventHubContext context;
        private readonly IMapper mapper;
        public CateringController(EventHubContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet("/api/caterers")]
        public async Task<List<CatererResources>> GetCaterers()
        {
            var M = await context.Caterer.ToListAsync();
            return Mapper.Map<List<Caterer>, List<CatererResources>>(M);
        }

        [HttpGet("/api/caterer/{id}")]
        public async Task<CatererResources> GetCaterers(int id)
        {
            var M = await context.Caterer.FirstOrDefaultAsync(h => h.CompanyId == id);
            return Mapper.Map<Caterer, CatererResources>(M);
        }

        [HttpPost("api/Catererbooking")]
        public async Task<int> PutBooking([FromBody] CatererBookingResources b)
        {
            int chk = 0;
            b.Status = 0;
            if (b != null)
            {
                chk = 1;
                var booking = mapper.Map<CatererBookingResources, CatererBooking>(b);
                context.CatererBooking.Add(booking);
                await context.SaveChangesAsync();
            }
            return chk;
        }
        [HttpPost("api/Registercaterer")]
        public async Task<int> PutCaterer([FromBody]CatererResources c)
        {
            int chk = 0;
            if (c != null)
            {
                chk = 1;
                var caterer = mapper.Map<CatererResources, Caterer>(c);
                context.Caterer.Add(caterer);
                await context.SaveChangesAsync();
            }

            return chk;
        }
    }
}