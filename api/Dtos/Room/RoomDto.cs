namespace api.Dtos.Room
{
    public class RoomDto
    {
        public int Id { get; set; }
        public string? RoomName { get; set; } = string.Empty;
        public int? RoomNumber { get; set; }
        public string? RoomType { get; set; } = string.Empty;
        public int? Capacity { get; set; }
        public int? RoomPrice { get; set; }
        public List<string>? ImagePaths { get; set; } = [];         
        public List<string>? Amenities { get; set; } = [];
    }
}