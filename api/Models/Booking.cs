namespace api.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public required DateTime BookingDate { get; set; }
        public required int GuestNumber { get; set; }
        public required DateTime CheckInDate { get; set; }
        public required DateTime CheckOutDate { get; set; }

        // One-to-Many with Customer
        public int CustomerId { get; set; }
        public required Customer Customer { get; set; }

        // One-to-One with Payment
        public required Payment Payment { get; set; }

        // Many-to-Many with Room
        public List<Room> Rooms { get; set; } = [];
    }
}