using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Features.Categories
{
    public class CreateCategory
    {
        public class Command : IRequest<Guid>
        {
            public CreateCategoryDto CreateCategoryDto { get; set; }
        }

        public class Handler : IRequestHandler<Command, Guid>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Guid> Handle(Command request, CancellationToken cancellationToken)
            {
                var category = _mapper.Map<Category>(request.CreateCategoryDto);
                category.Id = Guid.NewGuid();

                _context.Categories.Add(category);
                await _context.SaveChangesAsync(cancellationToken);

                return category.Id;
            }
        }
    }
}
