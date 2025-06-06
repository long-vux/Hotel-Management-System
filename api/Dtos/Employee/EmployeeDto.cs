namespace api.Dtos.Employee
{
    public class EmployeeDto
    {
        public int Id { get; set; }
        public required string FirstName { get; set; } = string.Empty;
        public required string LastName { get; set; } = string.Empty;
        public required DateTime DateOfBirth { get; set; }
        public required string Role { get; set; } = string.Empty;
        public required string Status { get; set; } = string.Empty;
        public required string Salary { get; set; } = string.Empty;
        public required string PhoneNumber { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;
        public required bool IsWoman { get; set; } 
        public required string Address { get; set; } = string.Empty;
        public required string ImagePath { get; set; } = string.Empty;
        public required string Department { get; set; } = string.Empty;
    }
}