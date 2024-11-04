using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Employee
{
    public class UpdateEmployeeDto
    {
        public string? FirstName { get; set; } = string.Empty;
        public string? LastName { get; set; } = string.Empty;
        [Range(typeof(DateTime), "01/01/1900", "01/01/2005", ErrorMessage = "Employee must be at least 18 years old")]
        public DateTime? DateOfBirth { get; set; }
        public string? Salary { get; set; } = string.Empty;
        public string? Role { get; set; } = string.Empty;
        public string? Status { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; } = string.Empty;
        public string? Address { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public bool? IsWoman { get; set; } 
        public IFormFile? Image { get; set; }
        public string? ImagePath { get; set; }
        public string? Department { get; set; } = string.Empty;
    }
}