using Application.Products;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            return await Mediator.Send(new GetAllProducts.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            return Ok();
        }
    }
}