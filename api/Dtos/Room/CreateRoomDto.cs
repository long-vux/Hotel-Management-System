using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Room
{
    public class CreateRoomDto
    {
        [Required(ErrorMessage = "Room name is required")]
        public required string RoomName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Room number is required")]
        public required int RoomNumber { get; set; }
        [Required(ErrorMessage = "Room type is required")]
        public required string RoomType { get; set; } = string.Empty;
        [Required(ErrorMessage = "Capacity is required")]
        public required int Capacity { get; set; }
        [Required(ErrorMessage = "Room price is required")]
        public required int RoomPrice { get; set; }
        public ICollection<IFormFile> ImagePaths { get; set; } = [];
        public List<string> Amenities { get; set; } = [];
    }
}