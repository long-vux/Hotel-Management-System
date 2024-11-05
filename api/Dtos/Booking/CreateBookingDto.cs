namespace api.Dtos.Booking
{
    public class CreateBookingDto
    {
        public required int GuestNumber { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public required int CustomerId { get; set; }
        public required int RoomId { get; set; }
        public required int TotalAmount { get; set; }
    }
}