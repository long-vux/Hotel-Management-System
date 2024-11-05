using api.Dtos.Booking;
using api.Models;

namespace api.Interfaces
{
    public interface IBookingRepository
    {
        Task<List<Booking>> GetAllAsync();
        Task<Booking?> GetByIdAsync(int id); // use ? because FirstOrDefault() can be returned null
        Task<Booking> CreateAsync(Booking bookingModel);
        Task<Booking?> UpdateAsync(int id, UpdateBookingDto bookingDto);
        Task<Booking?> DeleteAsync(int id);
        Task<bool> IsBookingExists(int id);
        Task<int> TodayCheckIn();
        Task<int> TodayCheckOut();
        Task<int> Reservation();
    }
}