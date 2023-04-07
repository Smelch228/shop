namespace ShopWebApp.Models.DTO
{
    public class OrderDTO
    {
        public List<CartItem> Cart { get; set; }

        public int UserId { get; set; }

        public string UserEmail { get; set; } = string.Empty;

        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public string ShippingAddress { get; set; } = string.Empty; //здесь объединить address+state+city+zip в ShippingAddress
    }

    public class CartItem
    {
        public int Quantity { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal UnitPrice { get; set; }
        public int ProductId { get; set; }
    }
}
