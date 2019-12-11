using OnlineShop.Mappings;

namespace OnlineShop.ViewModels.Product
{
    public class ProductViewModel : IMapFrom<Models.Product>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Image { get; set; }
    }
}
