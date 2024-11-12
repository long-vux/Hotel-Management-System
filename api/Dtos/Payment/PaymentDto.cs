namespace api.Dtos.Payment
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public DateTime PaymentDate { get; set; }
        public string PaymentMethod { get; set; } = string.Empty;
        public int TotalAmount { get; set; }
        public string Status { get; set; } = string.Empty;
        // Foreign key to Booking
        public int BookingId { get; set; }
    }
}