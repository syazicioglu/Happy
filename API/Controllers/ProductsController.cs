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
            return await Mediator.Send(new GetProduct.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct(Product product)
        {
            await Mediator.Send(new CreateProduct.Command { Product = product});
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(Guid id, Product product)
        {
            product.Id = id;
            await Mediator.Send(new UpdateProduct.Command { Product = product });
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            
            await Mediator.Send(new DeleteProduct.Command { Id = id });
            return Ok();
        }
    }
}