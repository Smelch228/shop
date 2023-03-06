﻿using ShopWebApp.Interfaces;
using ShopWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
        public async Task Post(Product result)
        {
            await _productRepo.CreateAsync(result);
        }
    }
}