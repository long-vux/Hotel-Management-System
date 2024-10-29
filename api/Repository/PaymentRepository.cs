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

        public async Task<Payment?> DeleteAsync(int id)
        {
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
                return null;

            _context.Payments.Remove(payment);

            await _context.SaveChangesAsync();

            return payment;
        }

        public async Task<Payment?> UpdateAsync(int id, Payment paymentModel)
        {
            var existingPayment = await _context.Payments.FirstOrDefaultAsync(x => x.Id == id);
            if (existingPayment == null)
                return null;

            existingPayment.PaymentDate = paymentModel.PaymentDate;
            existingPayment.PaymentMethod = paymentModel.PaymentMethod;
            existingPayment.TotalAmount = paymentModel.TotalAmount;

            await _context.SaveChangesAsync();

            return existingPayment;
        }

    }
}

