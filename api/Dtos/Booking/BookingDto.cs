namespace api.Dtos.Booking
{
    public class BookingDto
    {
        public int Id { get; set; }
        public required DateTime BookingDate { get; set; }
        public required int GuestNumber { get; set; }
        public required DateTime CheckInDate { get; set; }
        public required DateTime CheckOutDate { get; set; }
        public required bool IsCheckIn { get; set; }    
        public required bool IsCheckout { get; set; }
        public required string Status { get; set; }

        // One-to-Many with Customer
        public int CustomerId { get; set; }
        public int RoomId { get; set; }
    }
}