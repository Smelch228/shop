using ShopWebApp.Models.Enums;

namespace ShopWebApp.Models.DTO
{
    public class OrderViewDTO
    {
        public List<OrderItemsDTO> Products {get;set;}

        public DateTime OrderDate { get; set; }
        public double TotalPrice { get; set; }
        public string ShippingAddress { get; set; } = string.Empty;

        public OrderStatus Status { get; set; }
    }

    public class OrderItemsDTO
    {
        public string ProductName { get; set; } = string.Empty;

        public int Quantity { get; set; }

        public double UnitPrice { get; set; }
    }
}
