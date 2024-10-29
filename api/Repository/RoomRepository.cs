using api.Data;
using api.Dtos.Room;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class RoomRepository(ApplicationDBContext context) : IRoomRepository
    {
        private readonly ApplicationDBContext _context = context;

        public async Task<List<Room>> GetAllAsync()
        {
            return await _context.Rooms.Include(r => r.Bookings).ToListAsync();
        }

        public async Task<Room?> GetByIdAsync(int id)
        {
            return await _context.Rooms.Include(r => r.Bookings).FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task<Room> CreateAsync(Room roomModel)
        {
            await _context.Rooms.AddAsync(roomModel);
            await _context.SaveChangesAsync();
            return roomModel;
        }

        public async Task<Room?> UpdateAsync(int id, UpdateRoomDto roomDto)
        {
            var room = await _context.Rooms.FindAsync(id);
            if(room == null) return null;
            
            if (!string.IsNullOrEmpty(roomDto.RoomName))
                room.RoomName = roomDto.RoomName;
            if (!string.IsNullOrEmpty(roomDto.RoomStatus))
                room.RoomStatus = roomDto.RoomStatus;
            if (roomDto.RoomNumber != null)
                room.RoomNumber = (int)roomDto.RoomNumber;
            if (!string.IsNullOrEmpty(roomDto.RoomType))
                room.RoomType = roomDto.RoomType;
            if (roomDto.Capacity != null)
                room.Capacity = (int)roomDto.Capacity;
            if (roomDto.RoomPrice != null)
                room.RoomPrice = (int)roomDto.RoomPrice;
            if(roomDto.Amenities != null)
                room.Amenities = roomDto.Amenities;

            await _context.SaveChangesAsync();
            return room;
        }

        public async Task<Room?> DeleteAsync(int id)
        {
            var room = await _context.Rooms.FindAsync(id);
            if(room == null) return null;
            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();
            return room;
        }

        public async Task<Room?> AddImageAsync(int id, string imagePath)
        {
            var room = await _context.Rooms.FindAsync(id);
            
            if(room == null) return null;

            room.ImagePaths.Add(imagePath);
            await _context.SaveChangesAsync();
            return room;
        }

        public async Task<Room?> DeleteImageAsync(int id, string imagePath)
        {
            var room = await _context.Rooms.FindAsync(id);
            if(room == null) return null;

            room.ImagePaths.Remove(imagePath);
            await _context.SaveChangesAsync();
            return room;
        }
    }
}

