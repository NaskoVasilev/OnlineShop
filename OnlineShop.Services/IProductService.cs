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

        T GetById<T>(int id);

        Task Update(int id, ProductInputModel model);

        Task Delete(int id);
    }
}
