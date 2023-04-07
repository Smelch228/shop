using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;

namespace ShopWebApp.Interfaces
{
    public interface IProductRepo
    {
        int Create(ProductDTO product);

        Task UpdateAsync(Product product);

        Task DeleteAsync(Product product);

        Task<Product> GetByIdAsync(int id);

        Task<List<Product>> GetAllAsync();
    }
}
