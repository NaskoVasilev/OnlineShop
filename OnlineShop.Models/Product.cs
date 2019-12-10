namespace OnlineShop.Models
{
    public class Product : BaseModel<int>
    {
        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }
    }
}
