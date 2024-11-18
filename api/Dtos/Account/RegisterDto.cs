using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Account
{
    public class RegisterDto
    {
        [Required]
        public required string? FirstName { get; set; }
        [Required]
        public required string? LastName { get; set; }
        [Required]
        [EmailAddress]
        public required string? Email { get; set; }
        [Required]
        [Phone]
        public required string? PhoneNumber { get; set; }
        [Required]
        public required string Password { get; set; }
        [Required]
        // [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public required string? ConfirmPassword { get; set; }
    }
}