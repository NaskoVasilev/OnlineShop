﻿using OnlineShop.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace OnlineShop.Data
{
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole, string>
	{
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{
		}
	}
}
