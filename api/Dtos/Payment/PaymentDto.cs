namespace api.Dtos.Payment
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public required DateTime PaymentDate { get; set; }
        public required string PaymentMethod { get; set; } = string.Empty;
        public required int TotalAmount { get; set; }
        // Foreign key to Booking
        public int BookingId { get; set; }
    }
}