using api.Dtos.Account;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("api/account")]
    [EnableCors("AllowSpecificOrigin")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly ILogger<AccountController> _logger;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, ILogger<AccountController> logger, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _logger = logger;
            _signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var email = loginDto.Email ?? string.Empty;
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Email != null && u.Email.ToLower() == email.ToLower());

            if (user == null)
            {
                _logger.LogWarning("Login attempt failed: Email not registered - {Email}", email);
                return Unauthorized("Email not registered");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                _logger.LogWarning("Login attempt failed: Incorrect password - {Email}", email);
                return Unauthorized("Password is incorrect");
            }

            var token = await _tokenService.CreateToken(user);

            return Ok(new
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Role = user.Role,
                Token = token
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var appUser = new AppUser
            {
                UserName = registerDto.Email ?? string.Empty,
                Email = registerDto.Email ?? string.Empty,
                FirstName = registerDto.FirstName ?? string.Empty,
                LastName = registerDto.LastName ?? string.Empty,
                Role = "Employee"
            };

            var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

            if (!createdUser.Succeeded)
            {
                var errors = string.Join(", ", createdUser.Errors.Select(e => e.Description));
                _logger.LogError("User creation failed: {Errors}", errors);
                return StatusCode(500, createdUser.Errors);
            }

            var token = await _tokenService.CreateToken(appUser);

            return Ok(new NewUserDto
            {
                Email = appUser.Email,
                FirstName = appUser.FirstName,
                LastName = appUser.LastName,
                Token = token,
                Role = appUser.Role
            });
        }
    }
}
