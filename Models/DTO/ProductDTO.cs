using ShopWebApp.Models.Enums;

namespace ShopWebApp.Models.DTO
{
    public class ProductDTO
    {
        public string Name { get; set; } = string.Empty;
        public ProductCategories Category { get; set; }

        public string Description { get; set; } = string.Empty;

        public double Price { get; set; }

        public bool InStock { get; set; }

        public IFormFile Image { get; set; }
    }
}
