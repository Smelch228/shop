using ShopWebApp.Models.Enums;

namespace ShopWebApp.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public double TotalPrice { get; set; }
        public string ShippingAddress { get; set; }
        public string PhoneNumber { get; set; }
        public OrderStatus Status { get; set; }
        public int UserId { get; set; }
        public string UserEmail { get; set; }

        public string PersonName { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
