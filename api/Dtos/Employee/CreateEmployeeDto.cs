using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Dtos.Employee
{
    public class CreateEmployeeDto
    {
        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name must be less than 50 characters")]
        public required string FirstName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name must be less than 50 characters")]
        public required string LastName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Date of birth is required")]
        [Range(typeof(DateTime), "01/01/1900", "01/01/2005", ErrorMessage = "Employee must be at least 18 years old")]
        public required DateTime DateOfBirth { get; set; }
        [Required(ErrorMessage = "Salary is required")]
        public required string Salary { get; set; } = string.Empty;
        [Required(ErrorMessage = "Role is required")]
        public required string Role { get; set; } = string.Empty;
        [Required(ErrorMessage = "Phone number is required")]
        [Phone(ErrorMessage = "Invalid phone number")]
        public required string PhoneNumber { get; set; } = string.Empty;
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public required string Email { get; set; } = string.Empty;
        [Required(ErrorMessage = "Gender is required")]
        public required bool IsWoman { get; set; } 
        [Required(ErrorMessage = "Address is required")]
        public required string Address { get; set; } = string.Empty;
        [NotMapped]
        public required IFormFile Image { get; set; }
        [Required(ErrorMessage = "Department is required")]
        public required string Department { get; set; } = string.Empty;
    }
}