using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineShop.Data;
using OnlineShop.InputModels.Category;
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

        public IEnumerable<CategoryViewModel> All()
        {
            throw new NotImplementedException();
        }

        public Task Create(CategoryInputModel model)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<T> GetById<T>(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(CategoryInputModel model)
        {
            throw new NotImplementedException();
        }
    }
}
