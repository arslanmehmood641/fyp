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
    public class HomeController : Controller
    {
        private readonly EventHubContext context;
        private readonly IMapper mapper;

        public HomeController(EventHubContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpPost("/api/login")]
        public async Task<IActionResult> GetUser([FromBody]Login l)
        {


            Users U = await context.Users.FirstOrDefaultAsync(u => u.UserName == l.UserName
            && u.Password == l.Password);
            return Ok(U);
        }
        [HttpPost("/api/signup")]
        public async Task<IActionResult>PutUser([FromBody]UserResources u)
        {
            var user = mapper.Map<UserResources, Users>(u);
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return Ok(u);

        }
            [HttpGet("/api/getuserbyid/{id}")]
            public async Task<UserResources>GetUserById(int id)
            {
                var user= await context.Users.FirstOrDefaultAsync(x=>x.UId==id);
                return mapper.Map<Users,UserResources>(user);
             
            }
    }
}