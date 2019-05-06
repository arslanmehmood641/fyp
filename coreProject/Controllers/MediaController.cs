using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using coreProject.Controllers.Resources;
using coreProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace coreProject.Controllers {
    public class MediaController {
        private readonly EventHubContext context;
        private readonly IMapper mapper;
        public MediaController (EventHubContext context, IMapper mapper) {
            this.mapper = mapper;
            this.context = context;

        }
        [HttpGet ("/api/media")]
        public async Task<List<MediaResources>> GetMedia () {
            var M = await context.Media.ToListAsync ();
            return Mapper.Map<List<Media>, List<MediaResources>> (M);
        }
        [HttpGet ("/api/OneMedia/{companyId}")]
        public async Task<MediaResources> getMedia (int companyId) {
            var H = await context.Media.FirstOrDefaultAsync (h => h.CompanyId == companyId);
            return mapper.Map<Media, MediaResources> (H);
        }
        [HttpPost ("api/Mediabooking")]
        public async Task<int> PutBooking ([FromBody] BookingMediaResources b) {
            int chk = 0;
            b.Status = 0;
            if (b != null) {
                chk = 1;
                var booking = mapper.Map<BookingMediaResources, BookingMedia> (b);
                context.BookingMedia.Add (booking);
                await context.SaveChangesAsync ();
            }
            return chk;
        }
        [HttpPost("api/Registermedia")]
        public async Task<int> PutCaterer([FromBody]MediaResources m)
        {
            int chk = 0;
            if (m != null)
            {
                chk = 1;
                var media = mapper.Map<MediaResources,Media>(m);
                context.Media.Add(media);
                await context.SaveChangesAsync();
            }
            return chk;
        }
    }
}