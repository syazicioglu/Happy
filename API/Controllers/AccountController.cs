using System.Security.Claims;
using API.DTOs;
using API.DTOs.Validator;
using API.Extensions;
using API.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly TokenService _tokenService;
        private readonly EmailService _emailService;
        public AccountController(UserManager<AppUser> userManager, TokenService tokenService, EmailService emailService)
        {
            _emailService = emailService;
            _tokenService = tokenService;
            _userManager = userManager;

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
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto, [FromServices] IMemoryCache memoryCache)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Bu e-posta adresi zaten kullanılıyor");
                return ValidationProblem();
            }


            //biliyorum düzelticem
            var validator = new RegisterDtoValidator();
            var validationResult = await validator.ValidateAsync(registerDto);

            if (!validationResult.IsValid)
            {
                foreach (var failure in validationResult.Errors)
                {
                    ModelState.AddModelError(failure.PropertyName, failure.ErrorMessage);
                }

                return ValidationProblem(ModelState);
            }

            var verificationCode = GenerateVerificationCode();

            var registrationData = new
            {
                registerDto.Firstname,
                registerDto.Lastname,
                registerDto.Email,
                registerDto.Password,
                VerificationCode = verificationCode
            };
            memoryCache.Set(registerDto.Email, registrationData, TimeSpan.FromMinutes(10));

            await _emailService.SendEmailAsync(
                registerDto.Email,
                "E-posta Doğrulama",
                $"Doğrulama kodunuz: {verificationCode}"
            );

            return Ok("Doğrulama kodu gönderildi. Lütfen e-postanızı kontrol edin.");
        }

        [HttpPost("verify-email")]
        public async Task<ActionResult<UserDto>> VerifyEmail(VerifyEmailDto dto, [FromServices] IMemoryCache memoryCache)
        {
            if (!memoryCache.TryGetValue(dto.Email, out dynamic registrationData))
            {
                return BadRequest("Doğrulama kodu bulunamadı veya süresi doldu.");
            }

            if (registrationData.VerificationCode != dto.Code)
            {
                return BadRequest("Doğrulama kodu geçersiz.");
            }

            var user = new AppUser
            {
                FirstName = registrationData.Firstname,
                LastName = registrationData.Lastname,
                Email = dto.Email,
                UserName = dto.Email,
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, registrationData.Password);

            memoryCache.Remove(dto.Email);

            if (result.Succeeded)
            {
                return new UserDto
                {
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user),
                };
            }

            return BadRequest("Kullanıcı oluşturulurken bir hata meydana geldi.");
        }

        private string GenerateVerificationCode()
        {
            var random = new Random();
            return random.Next(100000, 999999).ToString();
        }

        [HttpPost("send-email")]
        public async Task<IActionResult> SendEmail()
        {
            await _emailService.SendEmailAsync(
                "goktekinikbals@gmail.com",
                "seni bulacayım",
                "Doğrulama kodunuz: 313153"
            );

            return Ok("E-posta başarıyla gönderildi.");
        }

    }
}