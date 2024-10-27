using api.Models;

namespace api.Interfaces
{
    public interface IPaymentRepository
    {
        Task<List<Payment>> GetAllAsync();
        Task<Payment?> GetByIdAsync(int id);
        Task<Payment> CreateAsync(Payment paymentModel);
    }
}