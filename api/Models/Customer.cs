namespace api.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string? Email { get; set; } = string.Empty;   
        public string? IdentityNumber { get; set; } = string.Empty;
        public string? IdentityType { get; set; } = string.Empty;
        public required string PhoneNumber { get; set; } = string.Empty;
        public List<Booking> Bookings { get; set; } = [];
    }
}
