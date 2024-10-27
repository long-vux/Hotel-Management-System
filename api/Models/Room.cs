namespace api.Models
{
    public class Room
    { 
        public int Id { get; set; }
        public required string RoomName { get; set; } = string.Empty;
        public required string RoomStatus { get; set; } = string.Empty;
        public required int RoomNumber { get; set; }
        public required string RoomType { get; set; } = string.Empty;
        public required int Capacity { get; set; }
        public required int RoomPrice { get; set; }
        public required List<string> ImagePaths { get; set; } = [];

        // Many-to-Many with Booking
        public List<Booking> Bookings { get; set; } = [];

        // Many-to-Many with Amenity
        public List<Amenity> Amenities { get; set; } = [];
    }
}