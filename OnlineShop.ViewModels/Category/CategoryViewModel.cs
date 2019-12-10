using OnlineShop.Mappings;

namespace OnlineShop.ViewModels.Category
{
    public class CategoryViewModel : IMapFrom<Models.Category>
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
