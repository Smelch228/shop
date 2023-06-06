using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopWebApp.Data;
using ShopWebApp.Interfaces;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;
using ShopWebApp.Models.Enums;

namespace ShopWebApp.Repositories
{
    public class OrderRepo : IOrderRepo
    {
        private readonly DataContext _context;

        public OrderRepo(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Order>> GetAllAsync()
        {
            var orders = await _context.Orders.ToListAsync();

            return orders;
        }

        public async Task<List<Order>> GetByUserId(int id)
        {
            var orders = await _context.Orders.Where(o => o.UserId == id).ToListAsync();


            return orders;
        }

        public async Task<List<OrderViewDTO>> GetUserOrdersDetailed(int id)
        {
            var orders = await _context.Orders.Where(o => o.UserId == id).ToListAsync();
            var result = new List<OrderViewDTO>();

            foreach (var order in orders)
            {
                var orderItems = new List<OrderItemsDTO>();
                var items = _context.OrderItems.Where(i => i.OrderId == order.Id);

                foreach (var item in items)
                {
                    orderItems.Add(new OrderItemsDTO
                    {
                        ProductName = item.ProductName,
                        Quantity = item.Quantity,
                        UnitPrice = item.UnitPrice,
                    });
                }

                var orderView = new OrderViewDTO()
                {
                    Products = orderItems,
                    OrderDate = order.OrderDate,
                    TotalPrice = order.TotalPrice,
                    ShippingAddress = order.ShippingAddress,
                    Status = order.Status,
                };

                result.Add(orderView);

            }

            return result;
        }

        public async Task<ActionResult<string>> AddOrder(OrderDTO orderDTO)
        {
            var orderItems = new List<OrderItem>();
            double totalPrice = 0.0;

            foreach (var cartProduct in orderDTO.CartData)
            {
                orderItems.Add(new OrderItem()
                {
                    ProductId = cartProduct.ProductId,
                    Quantity = cartProduct.Quantity,
                    ProductName = cartProduct.Name,
                    UnitPrice = cartProduct.Price,
                });
                totalPrice += cartProduct.Price * cartProduct.Quantity;
            }

            var order = new Order()
            {
                OrderItems = orderItems,
                Status = OrderStatus.Pending,
                TotalPrice = totalPrice,
                ShippingAddress = orderDTO.ShippingAddress,
                PhoneNumber = orderDTO.PhoneNumber,
                UserId = orderDTO.UserId,
                UserEmail = orderDTO.UserEmail,
                OrderDate = DateTime.Now,
                PersonName = orderDTO.LastName + " " + orderDTO.FirstName,
            };

            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();

            return "Order has been created!";
        }
    }
}
