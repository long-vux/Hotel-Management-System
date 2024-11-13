using api.Data;
using api.Dtos.Payment;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PaymentRepository(ApplicationDBContext context, IBookingRepository bookingRepository) : IPaymentRepository
    {
        private readonly ApplicationDBContext _context = context;
        private readonly IBookingRepository _bookingRepository = bookingRepository;

        public async Task<List<Payment>> GetAllAsync()
        {
            return await _context.Payments.OrderByDescending(x => x.PaymentDate).ToListAsync();
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

        public async Task<Payment?> DeleteAsync(int id)
        {
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
                return null;

            _context.Payments.Remove(payment);

            await _context.SaveChangesAsync();

            return payment;
        }

        public async Task<Payment?> UpdateAsync(int id, UpdatePaymentDto paymentDto)
        {
            var existingPayment = await _context.Payments.FirstOrDefaultAsync(x => x.Id == id);
            if (existingPayment == null)
                return null;

            if (paymentDto.PaymentDate != null)
                existingPayment.PaymentDate = paymentDto.PaymentDate ?? existingPayment.PaymentDate;

            if (!string.IsNullOrEmpty(paymentDto.PaymentMethod))
                existingPayment.PaymentMethod = paymentDto.PaymentMethod;
            if (!string.IsNullOrEmpty(paymentDto.TotalAmount.ToString()))
                existingPayment.TotalAmount = paymentDto.TotalAmount;
            if (!string.IsNullOrEmpty(paymentDto.Status))
                existingPayment.Status = paymentDto.Status;

            await _context.SaveChangesAsync();

            return existingPayment;
        }
    }
}

