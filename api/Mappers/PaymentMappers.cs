using api.Dtos.Payment;
using api.Models;

namespace api.Mappers
{
    public static class PaymentMappers
    {
        public static PaymentDto ToPaymentDto(this Payment paymentModel)
        {
            return new PaymentDto
            {
                Id = paymentModel.Id,
                PaymentDate = paymentModel.PaymentDate,
                PaymentMethod = paymentModel.PaymentMethod,
                TotalAmount = paymentModel.TotalAmount,
                BookingId = paymentModel.BookingId,
                Status = paymentModel.Status
            };
        }

        public static Payment ToPaymentFromCreateDto(this CreatePaymentDto paymentDto) {
            return new Payment
            {
                PaymentDate = DateTime.Now,
                PaymentMethod = paymentDto.PaymentMethod ?? string.Empty,
                TotalAmount = paymentDto.TotalAmount,
                Status = paymentDto.Status ?? string.Empty,
                BookingId = paymentDto.BookingId
            };
        }
    }
}