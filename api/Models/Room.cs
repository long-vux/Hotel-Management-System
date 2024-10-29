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
        public List<string> ImagePaths { get; set; } = [];
        public List<string> Amenities { get; set; } = [];

        // Navigation property for the one-to-many relationship
        public ICollection<Booking> Bookings { get; set; } = [];    
    }
}