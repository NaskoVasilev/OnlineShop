using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineShop.Data;
using OnlineShop.InputModels.Product;
using OnlineShop.ViewModels.Product;

namespace OnlineShop.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext context;

        public ProductService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<ProductViewModel> All()
        {
            throw new System.NotImplementedException();
        }

        public Task Create(ProductInputModel model)
        {
            throw new System.NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<T> GetById<T>(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task Update(ProductInputModel model)
        {
            throw new System.NotImplementedException();
        }
    }
}
