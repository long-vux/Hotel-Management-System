namespace api.Dtos.Room
{
    public class UpdateRoomDto
    {
        public string? RoomName { get; set; } = string.Empty;
        public string? RoomStatus { get; set; } = string.Empty;
        public int? RoomNumber { get; set; }
        public string? RoomType { get; set; } = string.Empty;
        public int? Capacity { get; set; }
        public int? RoomPrice { get; set; }
        public List<string>? Amenities { get; set; } = [];
    }
}