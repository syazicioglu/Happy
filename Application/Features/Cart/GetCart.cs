using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Features.Cart
{
    public class GetCart
    {
        public class Query : IRequest<CartDto>
        {
            public string UserId { get; set; }
        }

        public class Handler : IRequestHandler<Query, CartDto>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<CartDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var cart = await _context.Carts
                    .Include(c => c.Items)
                    .ThenInclude(ci => ci.Product) // Sepet içindeki ürün bilgilerini dahil edin
                    .FirstOrDefaultAsync(c => c.UserId == request.UserId, cancellationToken);

                if (cart == null)
                {
                    throw new Exception("Cart not found");
                }

                return new CartDto
                {
                    Id = cart.Id,
                    Items = cart.Items.Select(i => new CartItemDto
                    {
                        ProductId = i.ProductId,
                        ProductName = i.Product.Name,
                        Quantity = i.Quantity,
                        Price = i.Price
                    }).ToList()
                };
            }
        }
    }
}