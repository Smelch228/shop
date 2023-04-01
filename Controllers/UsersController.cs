using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Interfaces;
using ShopWebApp.Models;

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
        public async Task<List<User>> GetUsersAsync()
        {
            return await _userRepo.GetAllAsync();
        }

        [HttpPost("register")]
        public async Task<ActionResult<string>> RegisterUser(UserDTO request)
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
        public async Task<ActionResult<string>> Login(UserDTO request)
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

            /*
             TODO:
                1)Метод createToken
                2)Присобачить claims в виде ролей и айдишника.
             */
        }
    }
}
