using FluentValidation;

namespace API.DTOs.Validator
{
    public class RegisterDtoValidator : AbstractValidator<RegisterDto>
    {
        public RegisterDtoValidator()
        {
            RuleFor(x => x.Firstname).NotEmpty().MinimumLength(2).WithMessage("Ad alanı boş olamaz.");
            RuleFor(x => x.Lastname).NotEmpty().MinimumLength(2).WithMessage("Soyad alanı boş olamaz.");
            RuleFor(x => x.Email).NotEmpty().WithMessage("E-posta alanı boş olamaz.")
                                 .EmailAddress().WithMessage("Geçerli bir e-posta adresi girin.");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Şifre alanı boş olamaz.")
                                    .MinimumLength(8).WithMessage("Şifre en az 8 karakter olmalı.")
                                    .Matches("[A-Z]").WithMessage("Şifre en az bir büyük harf içermelidir.")
                                    .Matches("[0-9]").WithMessage("Şifre en az bir rakam içermelidir.");
        }
    }
}