using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineShop.InputModels.Product
{
    public class ProductInputModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }
    }
}
