using System.Security.Claims;
using Application.Features.Cart;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CartsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetCart()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var result = await Mediator.Send(new GetCart.Query { UserId = userId });
            return Ok(result);
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateCart([FromBody] UpdateCart.Command command)
        {
            command.UserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return Ok(await Mediator.Send(command));
        }
    }
}