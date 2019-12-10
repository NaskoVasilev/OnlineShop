using OnlineShop.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OnlineShop.Models
{
    public class Category : BaseModel<int>
    {
        [Required]
        [MaxLength(ModelConstants.CategoryNameMaxLength)]
        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
