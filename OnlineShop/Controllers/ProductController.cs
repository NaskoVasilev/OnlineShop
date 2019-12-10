using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShop.InputModels.Product;
using OnlineShop.Services;
using OnlineShop.ViewModels.Product;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShop.Controllers
{
    public class ProductController : ApiController
    {
        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        public ActionResult<IEnumerable<ProductViewModel>> Get() => Ok(productService.All());

        [HttpGet("{id}")]
        public ActionResult<ProductDetailsViewModel> Get(int id) => Ok(productService.GetById<ProductDetailsViewModel>(id));

        [HttpPost]
        public async Task<IActionResult> Post(ProductInputModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await productService.Create(model);
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, ProductInputModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await productService.Update(id, model);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await productService.Delete(id);
            return Ok();
        }
    }
}
