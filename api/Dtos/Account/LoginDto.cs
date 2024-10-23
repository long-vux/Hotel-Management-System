using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Account
{
    public class LoginDto
    {
        [Required]
        public required string? Username { get; set; } = string.Empty;
        [Required]
        public required string Password { get; set; } = string.Empty;
    }
}