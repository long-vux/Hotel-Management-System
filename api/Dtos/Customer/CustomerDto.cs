using api.Dtos.Booking;

namespace api.Dtos.Customer
{
    public class CustomerDto
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string IdentityNumber { get; set; } = string.Empty;
        public string IdentityType { get; set; } = string.Empty;
        public ICollection<BookingDto> Bookings { get; set; } = [];
    } 
}