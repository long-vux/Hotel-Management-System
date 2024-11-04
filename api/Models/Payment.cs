namespace api.Models
{
    public class Payment
    { 
        public int Id { get; set; }
        public DateTime PaymentDate { get; set; } = DateTime.MinValue;
        public required string PaymentMethod { get; set; } = string.Empty;
        public required int TotalAmount { get; set; }
        public required string Status { get; set; } = string.Empty;

        // One-to-One with Booking
        // Foreign Key for Booking
        public int BookingId { get; set; }
        public Booking Booking { get; set; } = null!;
    }
}