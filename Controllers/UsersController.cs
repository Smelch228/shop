using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Interfaces;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;

namespace ShopWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserRepo _userRepo;

        public UsersController(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpGet]
        [Authorize(Roles = "True")]
        public async Task<List<User>> GetUsersAsync()
        {
            return await _userRepo.GetAllAsync();
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<ProfileDTO>> GetUserById(int id)
        {
            var user = await _userRepo.GetByIdAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            var profile = new ProfileDTO() { Id = user.UserId, Email = user.Email, FirstName = user.FirstName, LastName = user.LastName, PhoneNumber = user.PhoneNumber };

            return Ok(profile);
        }

        [HttpPost("register")]
        public async Task<ActionResult<string>> RegisterUser(RegisterDTO request)
        {
            try
            {
                return await _userRepo.CreateAsync(request);
            }
            catch (Exception ex)
            {
                return BadRequest("This e-mail is already in use! " + ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(LoginDTO request)
        {
            var user = _userRepo.Login(request);

            if (user == null)
            {
                return NotFound();
            }
            else
            {
                string token = _userRepo.CreateToken(user);
                return Ok(token);
            }
        }

        [HttpPut("update")]
        [Authorize]
        public async Task<ActionResult> Update(ProfileDTO profile)
        {
            var user = await _userRepo.UpdateAsync(profile);
            if (user == null) { return NotFound(); }
            else { return Ok(); }
        }
    }
}
