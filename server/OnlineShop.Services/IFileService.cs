using System.IO;

namespace OnlineShop.Services
{
    public interface IFileService
    {
        string GenerateImagePath(string basePath, string extension);

        void Create(Stream stream, string path);

        void Delete(string path);

        string GetExtension(string path);
    }
}
