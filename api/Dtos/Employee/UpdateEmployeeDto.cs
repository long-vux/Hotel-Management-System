using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Employee
{
    public class UpdateEmployeeDto
    {
        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name must be less than 50 characters")]
        public required string FirstName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name must be less than 50 characters")]
        public required string LastName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Salary is required")]
        public required string Salary { get; set; } = string.Empty;
        [Required(ErrorMessage = "Phone number is required")]
        [Phone(ErrorMessage = "Invalid phone number")]
        public required string PhoneNumber { get; set; } = string.Empty;
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public required string Email { get; set; } = string.Empty;
        [Required(ErrorMessage = "Gender is required")]
        public required bool IsWoman { get; set; } 
        [NotMapped]
        public required IFormFile Image { get; set; }
    }
}