namespace api.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public required DateTime BookingDate { get; set; }
        public required int GuestNumber { get; set; }
        public required DateTime CheckInDate { get; set; }
        public required DateTime CheckOutDate { get; set; }
        public required string Status { get; set; } = string.Empty; 
        public required bool IsCheckIn { get; set; }
        public required bool IsCheckout { get; set; }
        
        // One-to-Many with Customer
        public int CustomerId { get; set; }
        public required Customer Customer { get; set; }

        // One-to-One with Payment
        public Payment Payment { get; set; } = null!;

        // Foreign key and navigation property
        public int RoomId { get; set; } 
        public required Room Room { get; set; } 
    }
}