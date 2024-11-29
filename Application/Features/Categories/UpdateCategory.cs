using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.DTOs;
using MediatR;
using Persistence;

namespace Application.Features.Categories
{
    public class UpdateCategory
{
    public class Command : IRequest<Unit>
    {
        public Guid Id { get; set; }
        public CreateCategoryDto CategoryDto { get; set; }
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
            var category = await _context.Categories.FindAsync(request.Id);

            if (category == null)
                throw new Exception("Category not found");

            category.Name = request.CategoryDto.Name;
            category.Description = request.CategoryDto.Description;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
}