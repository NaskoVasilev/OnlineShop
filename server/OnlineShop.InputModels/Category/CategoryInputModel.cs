using OnlineShop.Common;
using OnlineShop.Mappings;
using System.ComponentModel.DataAnnotations;

namespace OnlineShop.InputModels.Category
{
    public class CategoryInputModel : IMapFrom<Models.Category>, IMapTo<Models.Category>
    {
        public int Id { get; set; }

        [Required]
        [StringLength(ModelConstants.CategoryNameMaxLength, MinimumLength = ModelConstants.CategoryNameMinLength)]
        public string Name { get; set; }
    }
}
