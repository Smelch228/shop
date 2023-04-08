using ShopWebApp.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace ShopWebApp.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        public string? Name { get; set; }

        public ProductCategories Category { get; set; }

        public string? Description { get; set; }

        public double Price { get; set; }

        public bool InStock { get; set; }

        public string Image { get; set; }

        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
