namespace api.Dtos.Booking
{
    public class UpdateBookingDto
    {
        public required DateTime BookingDate { get; set; }
        public required int GuestNumber { get; set; }
        public required DateTime CheckInDate { get; set; }
        public required DateTime CheckOutDate { get; set; }
    }
}