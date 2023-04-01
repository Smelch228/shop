﻿using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Models;

namespace ShopWebApp.Interfaces
{
    public interface IUserRepo
    {
        Task<ActionResult<string>> CreateAsync(UserDTO user);

        User Login(UserDTO user);

        string CreateToken(User user);

        Task UpdateAsync(int id);

        Task DeleteAsync(int id);

        Task<User> GetByIdAsync(int id);

        Task<List<User>> GetAllAsync();
    }
}
