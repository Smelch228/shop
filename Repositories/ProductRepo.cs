using Microsoft.EntityFrameworkCore;
using ShopWebApp.Data;
using ShopWebApp.Interfaces;
using ShopWebApp.Models;

namespace ShopWebApp.Repositories
{
    public class ProductRepo : IProductRepo
    {
        private readonly DataContext _context;

        public ProductRepo(DataContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync(); 
        }

        public Task DeleteAsync(Product product)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Product>> GetAllAsync()
        {
            var products = await _context.Products
                .OrderByDescending(p => p.Price)
                .ToListAsync();
            return products;

        }

        public async Task<Product> GetByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id);
        }

        public async Task UpdateAsync(Product product)
        {
            _context.Products.Update(product);
            await _context.SaveChangesAsync();
        }
    }
}
