namespace api.Dtos.Payment
{
    public class PaymentDto
    {
        public required int Id { get; set; }
        public required DateTime PaymentDate { get; set; }
        public required string PaymentMethod { get; set; } = string.Empty;
        public required int TotalAmount { get; set; }
        public required string Status { get; set; } = string.Empty;
        // Foreign key to Booking
        public required int BookingId { get; set; }
    }
}