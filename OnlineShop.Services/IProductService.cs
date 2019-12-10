using OnlineShop.InputModels.Product;
using OnlineShop.ViewModels.Product;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShop.Services
{
    public interface IProductService
    {
        IEnumerable<ProductViewModel> All();

        Task Create(ProductInputModel model);

        Task<T> GetById<T>(int id);

        Task Update(ProductInputModel model);

        Task Delete(int id);
    }
}
