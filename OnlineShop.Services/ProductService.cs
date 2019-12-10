using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineShop.Data;
using OnlineShop.InputModels.Product;
using OnlineShop.ViewModels.Product;
using OnlineShop.Mappings;
using OnlineShop.Models;
using System.Linq;

namespace OnlineShop.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext context;

        public ProductService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<ProductViewModel> All() => context.Products.To<ProductViewModel>();

        public async Task Create(ProductInputModel model)
        {
            Product product = model.To<Product>();
            await context.Products.AddAsync(product);
            await context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            Product product = context.Products.Find(id);
            context.Products.Remove(product);
            await context.SaveChangesAsync();
        }

        public T GetById<T>(int id) => context.Products.Where(p => p.Id == id).To<T>().FirstOrDefault();

        public async Task Update(int id, ProductInputModel model)
        {
            Product product = context.Products.Find(id);
            product.Name = model.Name;
            product.Image = model.Image;
            product.Price = model.Price;
            product.Description = model.Description;
            product.CategoryId = model.CategoryId;

            context.Products.Update(product);
            await context.SaveChangesAsync();
        }
    }
}
