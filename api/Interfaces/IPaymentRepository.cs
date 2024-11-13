using api.Dtos.Payment;
using api.Models;

namespace api.Interfaces
{
    public interface IPaymentRepository
    {
        Task<List<Payment>> GetAllAsync();
        Task<Payment?> GetByIdAsync(int id);
        Task<Payment> CreateAsync(Payment paymentModel);
        Task<Payment?> UpdateAsync(int id, UpdatePaymentDto paymentDto);
        Task<Payment?> DeleteAsync(int id);
    }
}