using OnlineShop.InputModels.Product;
using OnlineShop.ViewModels.Product;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShop.Services
{
    public interface IProductService
    {
        IEnumerable<ProductViewModel> All(int? category, string orderBy);

        Task Create(ProductInputModel model, string path);

        T GetById<T>(int id);

        Task Update(int id, ProductInputModel model);

        Task Delete(int id);
    }
}
