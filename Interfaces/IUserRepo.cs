using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;

namespace ShopWebApp.Interfaces
{
    public interface IUserRepo
    {
        Task<ActionResult<string>> CreateAsync(RegisterDTO user);

        User Login(LoginDTO user);

        string CreateToken(User user);

        Task<User> UpdateAsync(ProfileDTO profile);

        Task DeleteAsync(int id);

        Task<User> GetByIdAsync(int id);

        Task<List<User>> GetAllAsync();
    }
}
