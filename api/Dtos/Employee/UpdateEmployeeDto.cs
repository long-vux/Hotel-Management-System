namespace api.Dtos.Employee
{
    public class UpdateEmployeeDto
    {
        public string? FirstName { get; set; } = string.Empty;
        public string? LastName { get; set; } = string.Empty;
        public string? Salary { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public bool? IsWoman { get; set; } 
        public IFormFile? Image { get; set; }
        public string? ImagePath { get; set; }
        public string? Department { get; set; } = string.Empty;
    }
}