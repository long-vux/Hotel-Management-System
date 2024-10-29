using api.Dtos.Booking;

namespace api.Dtos.Customer
{
    public class CustomerDto
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string PhoneNumber { get; set; }
        public required string IdentityNumber { get; set; }
        public required string IdentityType { get; set; }
        public ICollection<BookingDto> Bookings { get; set; } = [];
    } 
}