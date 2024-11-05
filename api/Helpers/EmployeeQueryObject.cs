namespace api.Helpers
{
    public class EmployeeQueryObject
    {
        public int? Id { get; set; } = null;
        public String? Name { get; set; } = null;
        public DateTime? DateOfBirth { get; set; } = null;
        public String? Role { get; set; } = null;
        public String? Status { get; set; } = null;
        public String? Salary { get; set; } = null;
        public String? PhoneNumber { get; set; } = null;
        public String? Email { get; set; } = null;
        public String? IsWoman { get; set; } = null;
        public String? Address { get; set; } = null;
    }
}