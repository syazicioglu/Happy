using System.Security.Claims;
using API.DTOs;
using API.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<AppUser> userManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);
            
            if (result)
            {
                return new UserDto
                {
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user),
                };
            }

            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {   
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }

            var user = new AppUser
            {
                UserName = registerDto.Email,
                Email = registerDto.Email,
                FirstName = registerDto.Firstname,
                LastName = registerDto.Lastname
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if(result.Succeeded)
            {
                return new UserDto
                {
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user),
                };
            }

            return BadRequest(result.Errors);
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
            };
        }
        
    }
}