using ShopWebApp.Models;

namespace ShopWebApp.Interfaces
{
    public interface IProductRepo
    {
        Task CreateAsync(Product product);

        Task UpdateAsync(Product product);

        Task DeleteAsync(Product product);

        Task<Product> GetByIdAsync(int id);

        Task<List<Product>> GetAllAsync();
    }
}
