using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopWebApp.Interfaces;
using ShopWebApp.Models;
using ShopWebApp.Models.DTO;
using System.Data;

namespace ShopWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private IOrderRepo _orderRepo;

        public OrdersController(IOrderRepo orderRepo)
        {
            _orderRepo = orderRepo;
        }

        [HttpGet]
        [Authorize(Roles = "True")]
        public async Task<List<Order>> GetAllOrdersAsync()
        {
            return await _orderRepo.GetAllAsync();
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<List<Order>> GetByUserIdAsync(int id)
        {
            return await _orderRepo.GetByUserId(id);
        }

        [HttpGet("getUserOrders/{id}")]
        [Authorize]
        public async Task<List<OrderViewDTO>> GetUserOrdersDetailed(int id)
        {
            return await _orderRepo.GetUserOrdersDetailed(id);
        }

        [HttpPost("create")]
        [Authorize]
        public async Task<ActionResult<string>> CreateOrder(OrderDTO orderDTO)
        {
            try
            {
                var result = await _orderRepo.AddOrder(orderDTO);

                return Ok(result.Value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
