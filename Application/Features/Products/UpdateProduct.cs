using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
    public class UpdateProduct
    {
        public class Command : IRequest<Unit>
        {
            public Guid Id { get; set; }
            public CreateProductDto ProductDto { get; set; }
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // Veritabanından ilgili ürünü al
                var product = await _context.Products.FindAsync(request.Id);

                if (product == null)
                {
                    throw new Exception("Product not found.");
                }

                // DTO'dan mevcut ürüne güncellemeleri uygula
                _mapper.Map(request.ProductDto, product);

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}