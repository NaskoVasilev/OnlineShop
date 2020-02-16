using OnlineShop.Common;
using System.ComponentModel.DataAnnotations;

namespace OnlineShop.Models
{
    public class Product : BaseModel<int>
    {
        [Required]
        [MaxLength(ModelConstants.ProductNameMaxLength)]
        public string Name { get; set; }

        public decimal Price { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string Description { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
