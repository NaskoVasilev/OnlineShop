using AutoMapper;
using Microsoft.AspNetCore.Http;
using OnlineShop.Common;
using OnlineShop.Mappings;
using System.ComponentModel.DataAnnotations;

namespace OnlineShop.InputModels.Product
{
    public class ProductInputModel : IMapFrom<Models.Product>, IMapTo<Models.Product> 
    {
        public int Id { get; set; }

        [Required]
        [StringLength(ModelConstants.ProductNameMaxLength, MinimumLength = ModelConstants.ProductNameMinLength)]
        public string Name { get; set; }

        [Range(ModelConstants.ProductPriceMinValue, ModelConstants.ProductPriceMaxValue)]
        public decimal Price { get; set; }

        [IgnoreMap]
        public IFormFile Image { get; set; }

        [Required]
        public string Description { get; set; }

        public int CategoryId { get; set; }
    }
}
