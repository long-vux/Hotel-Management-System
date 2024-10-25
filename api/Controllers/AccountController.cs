using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Account;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase // Change here
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
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var email = loginDto.Email ?? string.Empty;
                var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Email != null && u.Email.ToLower() == email.ToLower());

                if (user == null) 
                    return Unauthorized("Email not registered");

                var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

                if (!result.Succeeded) 
                    return Unauthorized("Password is incorrect");

                return Ok(new NewUserDto
                {
                    Email = user.Email ?? string.Empty,
                    Token = _tokenService.CreateToken(user),
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while processing the login request.");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var appUser = new AppUser
                {
                    UserName = registerDto.Email ?? string.Empty,
                    Email = registerDto.Email ?? string.Empty,
                    FirstName = registerDto.FirstName ?? string.Empty,
                    LastName = registerDto.LastName ?? string.Empty,
                };

                var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
                    if (roleResult.Succeeded)
                    {
                        return Ok(new NewUserDto
                        {
                            Email = appUser.Email ?? string.Empty,
                            Token = _tokenService.CreateToken(appUser)
                        });
                    }
                    else
                    {
                        _logger.LogError("Role assignment failed: {errors}", string.Join(", ", roleResult.Errors.Select(e => e.Description)));
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    _logger.LogError("User creation failed: {errors}", string.Join(", ", createdUser.Errors.Select(e => e.Description)));
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while processing the registration request.");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}