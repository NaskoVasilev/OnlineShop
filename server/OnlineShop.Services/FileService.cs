using OnlineShop.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace OnlineShop.Services
{
    public class FileService : IFileService
    {
        public void Create(Stream stream, string path)
        {
            using (FileStream fileStream = File.Create(path))
            {
                using (stream)
                {
                    stream.Seek(0, SeekOrigin.Begin);
                    stream.CopyTo(fileStream);
                }
            }
        }

        public void Delete(string path) => File.Delete(path);

        public string GenerateImagePath(string basePath, string extension)
        {
            string folderName = DateTime.Now.ToString(GlobalConstants.FileSystem.ImagesFolderNamePattern);
            string path = Path.Combine(basePath, folderName);
            
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            string fileName = $"{Path.GetRandomFileName()}.{extension}";
            return Path.Combine(folderName, fileName);
        }

        public string GetExtension(string path) => Path.GetExtension(path);
    }
}
