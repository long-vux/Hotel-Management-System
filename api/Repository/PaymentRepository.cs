using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;


namespace api.Repository
{
    public class PaymentRepository(ApplicationDBContext context) : IPaymentRepository
    {
        private readonly ApplicationDBContext _context = context;

        public async Task<List<Payment>> GetAllAsync()
        {
            return await _context.Payments.ToListAsync();
        }

        public async Task<Payment?> GetByIdAsync(int id)
        {
            return await _context.Payments.FindAsync(id);
        }

        public async Task<Payment> CreateAsync(Payment paymentModel)
        {
            await _context.Payments.AddAsync(paymentModel);
            
            await _context.SaveChangesAsync();
            
            return paymentModel;
        }

        // public async Task<Employee?> DeleteAsync(int id)
        // {
        //     var booking = await _context.Bookings.FindAsync(id);
        //     if (booking == null)
        //         return null;
        //     _context.Bookings.Remove(booking);
        //     await _context.SaveChangesAsync();
        // return payment;
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

