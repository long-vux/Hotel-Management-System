namespace api.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string IdentityNumber { get; set; }
        public required string IdentityType { get; set; }
        public required string PhoneNumber { get; set; }
        public List<Booking> Bookings { get; set; } = [];
    }
}
