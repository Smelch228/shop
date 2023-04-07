using ShopWebApp.Interfaces;
using ShopWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using ShopWebApp.Models.DTO;

namespace ShopWebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private IProductRepo _productRepo;

        public ProductController(IProductRepo productRepo)
        {
            _productRepo = productRepo;
        }

        [HttpGet]
        public async Task<List<Product>> Get()
        {
            return await _productRepo.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Product> GetById(int id)
        {
            return await _productRepo.GetByIdAsync(id);
        }

        [HttpPost]
        [Authorize(Roles = "True")]
        public async Task<ActionResult<int>> Post([FromForm] ProductDTO response)
        {
            int id = _productRepo.Create(response);

            return Ok(id);
        }
    }
}
