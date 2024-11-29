using Application.DTOs;
using Application.Features.Categories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoriesController : BaseApiController
    {

        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryDto categoryDto)
        {
            await Mediator.Send(new CreateCategory.Command { CreateCategoryDto = categoryDto });
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, CreateCategoryDto dto)
        {
            
            await Mediator.Send(new UpdateCategory.Command { Id = id, CategoryDto = dto });
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeleteCategory.Command { Id = id });
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryDto>> GetById(Guid id)
        {
            var category = await Mediator.Send(new GetCategoryById.Query { Id = id });
            return Ok(category);
        }

        [HttpGet]
        public async Task<ActionResult<List<CategoryDto>>> GetAll()
        {
            var categories = await Mediator.Send(new GetAllCategories.Query());
            return Ok(categories);
        }

    }
}