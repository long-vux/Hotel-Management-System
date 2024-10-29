namespace api.Models
{
    public class Payment
    { 
        public int Id { get; set; }
        public required DateTime PaymentDate { get; set; }
        public required string PaymentMethod { get; set; } = string.Empty;
        public required int TotalAmount { get; set; }

        // One-to-One with Booking
        // Foreign Key for Booking
        public int BookingId { get; set; }
        public Booking Booking { get; set; } = null!;
    }
}

