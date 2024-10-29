using api.Dtos.Room;
using api.Models;

namespace api.Mappers
{
    public static class RoomMappers
    {
        public static RoomDto ToRoomDto(this Room roomModel)
        {
            return new RoomDto
            {
                Id = roomModel.Id,
                RoomName = roomModel.RoomName,
                RoomNumber = roomModel.RoomNumber,
                RoomType = roomModel.RoomType,
                Capacity = roomModel.Capacity,
                RoomPrice = roomModel.RoomPrice,
                ImagePaths = roomModel.ImagePaths,
                Amenities = roomModel.Amenities,
            };
        }

        public static Room ToRoomFromCreateDto(this CreateRoomDto roomDto) {
            return new Room
            {
                RoomName = roomDto.RoomName,
                RoomStatus = "Available",
                RoomNumber = roomDto.RoomNumber,
                RoomType = roomDto.RoomType,
                Capacity = roomDto.Capacity,
                RoomPrice = roomDto.RoomPrice,
                Amenities = roomDto.Amenities
            };
        }
    }
}