using api.Dtos.Room;
using api.Models;

namespace api.Interfaces
{
    public interface IRoomRepository
    {
        Task<List<Room>> GetAllAsync();
        Task<Room?> GetByIdAsync(int id);
        Task<Room> CreateAsync(Room roomModel);
        Task<Room?> UpdateAsync(int id, UpdateRoomDto roomDto);
        Task<Room?> DeleteAsync(int id);
        Task<Room?> AddImageAsync(int id, string imagePath);
        Task<Room?> DeleteImageAsync(int id, string imagePath);
        Task<int> RoomAvailable();
    }
}