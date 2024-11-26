using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class VerifyEmailDto
    {
        public string Email { get; set; }
        public string Code { get; set; } // 6 basamaklı sayı
    }
}