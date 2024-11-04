namespace api.Dtos.Booking
{
    public class UpdateBookingDto
    {
        public int GuestNumber { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public string? Status { get; set; } = string.Empty;
    }
}