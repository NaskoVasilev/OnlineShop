using OnlineShop.InputModels.Category;
using OnlineShop.ViewModels.Category;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShop.Services
{
    public interface ICategoryService
    {
        IEnumerable<CategoryViewModel> All();

        Task Create(CategoryInputModel model);

        T GetById<T>(int id);

        Task Update(int id, CategoryInputModel model);

        Task Delete(int id);
    }
}
