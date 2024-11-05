using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Customer
{
    public class CreateCustomerDto
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; } = string.Empty;
        public string IdentityNumber { get; set; } = string.Empty;
        public string IdentityType { get; set; } = string.Empty;
        [Phone(ErrorMessage = "Invalid phone number")]
        public required string PhoneNumber { get; set; }
    }
}