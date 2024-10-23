using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

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
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public required string Email { get; set; }
        [Required(ErrorMessage = "Phone number is required")]
        [Phone(ErrorMessage = "Invalid phone number")]
        public required string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Address is required")]
        public required string Address { get; set; }
        [Required(ErrorMessage = "City is required")]
        public required string City { get; set; }
        [Required(ErrorMessage = "Country is required")]
        public required string Country { get; set; }
        [Required(ErrorMessage = "Registration date is required")]
        public DateTime RegistrationDate { get; set; }
    }
}