using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Features.Cart
{
    public class UpdateCart
    {
        public class Command : IRequest<Unit>
        {
            public string UserId { get; set; }
            public Guid ProductId { get; set; }
            public int Quantity { get; set; } // Pozitif: ekle, Negatif: çıkar
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var cart = await _context.Carts
                    .Include(c => c.Items)
                    .FirstOrDefaultAsync(c => c.UserId == request.UserId, cancellationToken);

                if (cart == null)
                {
                    throw new Exception("Cart not found");
                }

                var cartItem = cart.Items.FirstOrDefault(i => i.ProductId == request.ProductId);

                if (cartItem == null)
                {
                    // Yeni ürün ekleniyor
                    cart.Items.Add(new CartItem
                    {
                        ProductId = request.ProductId,
                        Quantity = request.Quantity,
                        Price = _context.Products.First(p => p.Id == request.ProductId).Price
                    });
                }
                else
                {
                    // Mevcut ürün güncelleniyor
                    cartItem.Quantity += request.Quantity;

                    if (cartItem.Quantity <= 0)
                    {
                        // Ürün tamamen çıkarılıyor
                        cart.Items.Remove(cartItem);
                    }
                }

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}