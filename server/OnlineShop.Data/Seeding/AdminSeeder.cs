using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using OnlineShop.Common;
using OnlineShop.Common.Settings;
using OnlineShop.Models;

namespace OnlineShop.Data.Seeding
{
    public class AdminSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            AdminSettings adminSettings = serviceProvider.GetRequiredService<AdminSettings>();
            UserManager<ApplicationUser> userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            ApplicationUser userFromDb = await userManager.FindByNameAsync(adminSettings.Username);

            if (userFromDb != null)
            {
                return;
            }

            var user = new ApplicationUser
            {
                Email = adminSettings.Email,
                UserName = adminSettings.Username,
                EmailConfirmed = true
            };

            await userManager.CreateAsync(user, adminSettings.Password);
            await userManager.AddToRoleAsync(user, GlobalConstants.AdministratorRoleName);
        }
    }
}
