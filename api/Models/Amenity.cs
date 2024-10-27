namespace api.Models
{
    public class Amenity
    { 
        public int Id { get; set; }
        public required string AmenityName { get; set; } = string.Empty;
        public required string IconPath { get; set; } = string.Empty;
        
        // Many-to-Many with Room
        public List<Room> Rooms { get; set; } = [];
    }
}

