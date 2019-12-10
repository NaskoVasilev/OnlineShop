using Microsoft.AspNetCore.Mvc;

namespace OnlineShop.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ApiController : ControllerBase
	{
        public ActionResult<int[]> Values()
        {
            return new int[] { 1, 2, 3 };
        }
	}
}
