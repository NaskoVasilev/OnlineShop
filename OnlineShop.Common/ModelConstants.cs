namespace OnlineShop.Common
{
    public class ModelConstants
    {
        #region Category models
        public const int CategoryNameMaxLength = 50;
        public const int CategoryNameMinLength = 2;
        #endregion

        #region ProductModels
        public const int ProductNameMaxLength = 100;
        public const int ProductNameMinLength = 2;
        public const double ProductPriceMinValue = 0.01;
        public const double ProductPriceMaxValue = 1000000;

        #endregion
    }
}
