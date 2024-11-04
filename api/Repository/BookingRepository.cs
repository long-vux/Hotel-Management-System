using api.Data;
using api.Dtos.Booking;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class BookingRepository(ApplicationDBContext context) : IBookingRepository
    {
        private readonly ApplicationDBContext _context = context;

        public async Task<bool> IsBookingExists(int id)
        {
            return await _context.Bookings.AnyAsync(b => b.Id == id);
        }

        public async Task<Booking?> GetByIdAsync(int id)
        {
            return await _context.Bookings
                .Include(b => b.Room)
                .Include(b => b.Customer)
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<List<Booking>> GetAllAsync()
        {
            var bookings = _context.Bookings
                .Include(b => b.Room)
                .Include(b => b.Customer)
                .AsQueryable();

            return await bookings.ToListAsync();
        }

        public async Task<Booking> CreateAsync(Booking bookingModel)
        {
            await _context.Bookings.AddAsync(bookingModel);
            await _context.SaveChangesAsync();
            return bookingModel;
        }

        public async Task<Booking?> UpdateAsync(int id, UpdateBookingDto bookingDto)
        {
            var existingBooking = await _context.Bookings.FirstOrDefaultAsync(x => x.Id == id);
            if (existingBooking == null)
                return null;
            if (bookingDto.GuestNumber != 0)
                existingBooking.GuestNumber = bookingDto.GuestNumber;
            if (bookingDto.CheckInDate != DateTime.MinValue)
                existingBooking.CheckInDate = bookingDto.CheckInDate;
            if (bookingDto.CheckOutDate != DateTime.MinValue)
                existingBooking.CheckOutDate = bookingDto.CheckOutDate;
            if (bookingDto.Status != null)
                existingBooking.Status = bookingDto.Status;

            await _context.SaveChangesAsync();
            return existingBooking;
        }

        public async Task<Booking?> DeleteAsync(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
                return null;
            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();
            return booking;
        }
    }
}

