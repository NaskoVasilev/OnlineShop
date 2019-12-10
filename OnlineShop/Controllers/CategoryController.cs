using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShop.InputModels.Category;
using OnlineShop.Services;
using OnlineShop.ViewModels.Category;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShop.Controllers
{
    public class CategoryController : ApiController
    {
        private readonly ICategoryService categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        public ActionResult<IEnumerable<CategoryViewModel>> Get() => Ok(categoryService.All());

        [HttpGet("{id}")]
        public ActionResult<CategoryViewModel> Get(int id) => Ok(categoryService.GetById<CategoryViewModel>(id));

        [HttpPost]
        public async Task<IActionResult> Post(CategoryInputModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await categoryService.Create(model);
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, CategoryInputModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await categoryService.Update(id, model);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await categoryService.Delete(id);
            return Ok();
        }
    }
}
