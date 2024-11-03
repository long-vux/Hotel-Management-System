using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public required string FirstName { get; set; } = string.Empty;
        public required string LastName { get; set; } = string.Empty;
        [Required]
        [DataType(DataType.Date)]
        [RegularExpression(@"^\d{4}-\d{2}-\d{2}$", ErrorMessage = "The date must be in the format YYYY-MM-DD")]
        public required DateTime DateOfBirth { get; set; }
        public required string Salary { get; set; } = string.Empty;
        public required string PhoneNumber { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;
        public required bool IsWoman { get; set; } 
        public required string ImagePath { get; set; } = string.Empty; // Store the image file path, not the file itself
        public required string Department { get; set; } = string.Empty;
    }
}

