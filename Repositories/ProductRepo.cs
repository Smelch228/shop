using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Server;
using ShopWebApp.Data;
using ShopWebApp.Interfaces;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;

namespace ShopWebApp.Repositories
{
    public class ProductRepo : IProductRepo
    {
        private readonly DataContext _context;

        public ProductRepo(DataContext context)
        {
            _context = context;
        }

        private string CreateImage(IFormFile img)
        {
            if (img == null || img.Length == 0)
            {
                throw new ArgumentNullException(nameof(img));
            }

            var uploadFolder = Path.Combine("wwwroot", "images");
            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var fileName = $"{Guid.NewGuid().ToString()}{Path.GetExtension(img.FileName)}";
            var filePath = Path.Combine(uploadFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                img.CopyTo(stream);
            }

            filePath = filePath.Replace("wwwroot", "https://localhost:7277").Replace("\\", "/");

            return filePath;
        }

        public int Create(ProductDTO request)
        {
            string filePath = CreateImage(request.Image);
            var product = new Product()
            {
                Name = request.Name,
                Category = request.Category,
                Description = request.Description,
                Price = request.Price,
                InStock = request.InStock,
                Image = filePath
            };
            _context.Products.Add(product);
            _context.SaveChanges();
            int id = product.Id;


            return id;
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
