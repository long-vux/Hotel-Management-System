using System.Threading.Tasks;
using api.Data;
using api.Dtos.Employee;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
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

        // public async Task<Booking> CreateAsync(Booking bookingModel)
        // {
        //     await _context.Bookings.AddAsync(bookingModel);
        //     await _context.SaveChangesAsync();
        //     return bookingModel;
        // }

        // public async Task<Employee?> DeleteAsync(int id)
        // {
        //     var booking = await _context.Bookings.FindAsync(id);
        //     if (booking == null)
        //         return null;
        //     _context.Bookings.Remove(booking);
        //     await _context.SaveChangesAsync();
        //     return booking;
        // }

        // public async Task<List<Employee>> GetAllAsync(EmployeeQueryObject query)
        // {
        //     var bookings = _context.Bookings.AsQueryable();
        //     var name = bookings.Select(e => e.GuestName);

        //     if (query.Id != null)
        //         bookings = bookings.Where(e => e.Id == query.Id);
        //     if (!string.IsNullOrEmpty(query.Name))
        //         bookings = bookings.Where(e => name.Contains(query.Name));
        //     if (!string.IsNullOrEmpty(query.Email))
        //         bookings = bookings.Where(e => e.Email.Contains(query.Email));
        //     if (!string.IsNullOrEmpty(query.Phone))
        //         bookings = bookings.Where(e => e.PhoneNumber.Contains(query.Phone));

        //     return await bookings.ToListAsync();
        // }

        // public async Task<Employee?> GetByIdAsync(int id)
        // {
        //     return await _context.Bookings.FindAsync(id);
        // }

        // public async Task<Employee?> UpdateAsync(int id, Employee employeeModel)
        // {
        //     var existingBooking = await _context.Bookings.FirstOrDefaultAsync(x => x.Id == id);
        //     if (existingBooking == null)
        //         return null;
    
        //     existingBooking.GuestNumber = bookingModel.GuestNumber;
        //     existingBooking.CheckInDate = bookingModel.CheckInDate;
        //     existingBooking.CheckOutDate = bookingModel.CheckOutDate;

        //     if (!string.IsNullOrEmpty(bookingModel.ImagePath))
        //     {
        //         existingEmployee.ImagePath = employeeModel.ImagePath;
        //     }

        //     await _context.SaveChangesAsync();
        //     return existingEmployee;
        // }

    }
}

