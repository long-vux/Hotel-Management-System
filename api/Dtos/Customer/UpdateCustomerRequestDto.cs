using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Customer
{
    public class UpdateCustomerRequestDto
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string PhoneNumber { get; set; }
        public required string Address { get; set; }
        public required string City { get; set; }
        public required string Country { get; set; }
        public DateTime RegistrationDate { get; set; }
    }
}