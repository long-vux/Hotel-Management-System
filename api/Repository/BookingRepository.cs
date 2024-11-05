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
            if (bookingDto.GuestNumber != null)
                existingBooking.GuestNumber = bookingDto.GuestNumber ?? existingBooking.GuestNumber;
            if (bookingDto.CheckInDate != null)
                existingBooking.CheckInDate = bookingDto.CheckInDate ?? existingBooking.CheckInDate;
            if (bookingDto.CheckOutDate != null)
                existingBooking.CheckOutDate = bookingDto.CheckOutDate ?? existingBooking.CheckOutDate;
            if (!string.IsNullOrEmpty(bookingDto.Status))
                existingBooking.Status = bookingDto.Status;
            if (bookingDto.IsCheckIn != null)
                existingBooking.IsCheckIn = bookingDto.IsCheckIn ?? existingBooking.IsCheckIn;
            if (bookingDto.IsCheckout != null)
                existingBooking.IsCheckout = bookingDto.IsCheckout ?? existingBooking.IsCheckout;

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

        public async Task<int> TodayCheckIn()
        {
            var bookings = await _context.Bookings.Where(b => b.CheckInDate.Date == DateTime.Today && b.IsCheckIn).ToListAsync();
            return bookings.Count;
        }

        public async Task<int> TodayCheckOut()
        {
            var bookings = await _context.Bookings.Where(b => b.CheckOutDate.Date == DateTime.Today && b.IsCheckout).ToListAsync();
            return bookings.Count;
        }

        public async Task<int> Reservation()
        {
            var bookings = await _context.Bookings.Where(b => b.Status == "Confirmed").ToListAsync();
            return bookings.Count;
        }
    }
}

