﻿using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineShop.Data;
using OnlineShop.InputModels.Product;
using OnlineShop.ViewModels.Product;
using OnlineShop.Mappings;
using OnlineShop.Models;
using System.Linq;
using OnlineShop.Common;

namespace OnlineShop.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext context;

        public ProductService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<ProductViewModel> All(int? category, string orderBy)
        {
            IQueryable<Product> products = context.Products;
            if (category.HasValue)
            {
                int categoryId = category.Value;
                products = products.Where(p => p.CategoryId == categoryId);
            }
            if (!string.IsNullOrEmpty(orderBy))
            {
                if(orderBy == GlobalConstants.Sotring.ByPriceAscending)
                {
                    products = products.OrderBy(p => p.Price);
                }
                else if(orderBy == GlobalConstants.Sotring.ByPriceDescending)
                {
                    products = products.OrderByDescending(p => p.Price);
                }
            }

            return products.To<ProductViewModel>().ToList();
        }

        public async Task Create(ProductInputModel model, string path)
        {
            Product product = model.To<Product>();
            product.Image = path;
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
            product.Price = model.Price;
            product.Description = model.Description;
            product.CategoryId = model.CategoryId;

            context.Products.Update(product);
            await context.SaveChangesAsync();
        }
    }
}
