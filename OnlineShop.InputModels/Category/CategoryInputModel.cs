using OnlineShop.Common;
using System.ComponentModel.DataAnnotations;

namespace OnlineShop.InputModels.Category
{
    public class CategoryInputModel
    {
        public int Id { get; set; }

        [Required]
        [StringLength(ModelConstants.CategoryNameMaxLength, MinimumLength = ModelConstants.CategoryNameMinLength)]
        public string Name { get; set; }
    }
}
