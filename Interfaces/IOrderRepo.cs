using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;

namespace ShopWebApp.Interfaces
{
    public interface IOrderRepo
    {
        Task<List<Order>> GetAllAsync();

        Task<List<Order>> GetByUserId(int id);

        Task<ActionResult<string>> AddOrder(OrderDTO orderDTO);

        Task<List<OrderViewDTO>> GetUserOrdersDetailed(int id);
    }
}
