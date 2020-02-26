using Microsoft.AspNetCore.Hosting;
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
        private readonly IFileService fileService;
        private readonly IHostingEnvironment hostingEnvironment;

        public IFileService FileService => fileService;

        public ProductController(
            IProductService productService, 
            IFileService fileService,
            IHostingEnvironment hostingEnvironment)
        {
            this.productService = productService;
            this.fileService = fileService;
            this.hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductViewModel>> Get(int? categoryId, string orderBy) => 
            Ok(productService.All(categoryId, orderBy));

        [HttpGet("{id}")]
        public ActionResult<ProductDetailsViewModel> Get(int id) => Ok(productService.GetById<ProductDetailsViewModel>(id));

        [HttpPost]
        public async Task<IActionResult> Post(ProductInputModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            string extension = fileService.GetExtension(model.Image.FileName);
            string path = fileService.GenerateImagePath(hostingEnvironment.WebRootPath, extension);
            fileService.Create(model.Image.OpenReadStream(), path);

            await productService.Create(model, path);
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, ProductInputModel model)
        {
            if (!ModelState.IsValid || model.Image == null)
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
