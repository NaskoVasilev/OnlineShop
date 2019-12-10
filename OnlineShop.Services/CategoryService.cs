using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineShop.Data;
using OnlineShop.InputModels.Category;
using OnlineShop.Mappings;
using OnlineShop.Models;
using OnlineShop.ViewModels.Category;

namespace OnlineShop.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext context;

        public CategoryService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<CategoryViewModel> All() => context.Categories.To<CategoryViewModel>();

        public async Task Create(CategoryInputModel model)
        {
            Category category = model.To<Category>();
            await context.Categories.AddAsync(category);
            await context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            Category category = context.Categories.Find(id);
            context.Categories.Remove(category);
            await context.SaveChangesAsync();
        }

        public T GetById<T>(int id) => context.Categories.Where(x => x.Id == id).To<T>().FirstOrDefault();

        public async Task Update(int id, CategoryInputModel model)
        {
            Category category = context.Categories.Find(id);
            category.Name = model.Name;
            context.Categories.Update(category);
            await context.SaveChangesAsync();
        }
    }
}
