namespace api.Dtos.Booking
{
    public class CreateBookingDto
    {
        public required DateTime BookingDate { get; set; }
        public required int GuestNumber { get; set; }
        public required DateTime CheckInDate { get; set; }
        public required DateTime CheckOutDate { get; set; }
        public required int CustomerId { get; set; }
        public required int RoomId { get; set; }
    }
}