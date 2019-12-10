using System.Text;
using OnlineShop.Configuration;
using OnlineShop.Data;
using OnlineShop.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using OnlineShop.Mappings;
using OnlineShop.InputModels.Product;
using OnlineShop.ViewModels.Product;
using OnlineShop.Services;
using Swashbuckle.AspNetCore.Swagger;

namespace OnlineShop
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<ApplicationDbContext>(options => options
				.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

			services.AddIdentity<ApplicationUser, IdentityRole>(options => 
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredUniqueChars = 0;
            })
			.AddDefaultTokenProviders()
			.AddEntityFrameworkStores<ApplicationDbContext>();

			var jwtSettingsSection = Configuration.GetSection("JwtSettings");
			services.Configure<JwtSettings>(jwtSettingsSection);

			var jwtSettings = jwtSettingsSection.Get<JwtSettings>();
			var key = Encoding.ASCII.GetBytes(jwtSettings.Secret);
			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			})
			.AddJwtBearer(options =>
			{
				options.RequireHttpsMetadata = false;
				options.SaveToken = true;
				options.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = new SymmetricSecurityKey(key),
					ValidateIssuer = false,
					ValidateAudience = false
				};
			});

            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<ICategoryService, CategoryService>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info() { Title = "Online shop API", Version = "v1" });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
            AutoMapperConfig.RegisterMappings(typeof(ProductInputModel).Assembly, typeof(ProductViewModel).Assembly);

            if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
                
                using(IServiceScope serviceScope = app.ApplicationServices.CreateScope())
                {
                    ApplicationDbContext context = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                    context.Database.Migrate();
                }
			}
			else
			{
				app.UseHsts();
			}

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Online shop API V1");
            });

            app.UseAuthentication();
			app.UseHttpsRedirection();
			app.UseMvc();
		}
	}
}
