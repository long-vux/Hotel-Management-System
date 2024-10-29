using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Customer
{
    public class CreateCustomerDto
    {
        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name must be less than 50 characters")]
        public required string FirstName { get; set; }
        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name must be less than 50 characters")]
        public required string LastName { get; set; }
        [Required(ErrorMessage = "Identity number is required")]
        [StringLength(13, ErrorMessage = "Identity number must be 13 characters")]
        public required string IdentityNumber { get; set; }
        [Required(ErrorMessage = "Identity type is required")]
        public required string IdentityType { get; set; }
        [Required(ErrorMessage = "Phone number is required")]
        [Phone(ErrorMessage = "Invalid phone number")]
        public required string PhoneNumber { get; set; }
    }
}