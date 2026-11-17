using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.ApplicationData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using api.Models;
using api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using api.Extentions;

namespace api.Controllers
{
    [Route("api/portfolio")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly IStockRepository _stockRepo;
        private readonly IPortfolioRepository _portfolioRepo;
        private readonly UserManager<AppUser> _userManager;
        
        public PortfolioController(IStockRepository stockRepo, UserManager<AppUser> userManager, IPortfolioRepository portfolioRepository)
        {
            _stockRepo = stockRepo;
            _portfolioRepo = portfolioRepository;
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);

            return Ok(userPortfolio);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddPortfolio(string symbol)
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var stock = await _stockRepo.GetBySymbolAsync(symbol);

            if(stock == null) return BadRequest("Stock not found");

            var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);

            if(userPortfolio.Any(s => s.Symbol == symbol)) return BadRequest("Stock already in the portfolio");

            var portfolioModel = new Portfolio
            {
                AppUserId = appUser.Id,
                StockId = stock.Id
            };

            if(await _portfolioRepo.CreateAsync(portfolioModel) == null) return StatusCode(500, "Could not create portfolio");
            else return Created();


        }
    }
}