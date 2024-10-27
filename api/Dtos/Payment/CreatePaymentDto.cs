using System;
using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Payment
{
    public class CreatePaymentDto
    {
        [Required(ErrorMessage = "Payment method is required")]
        public required string PaymentMethod { get; set; } = string.Empty;
        [Required(ErrorMessage = "Total amount is required")]
        public required int TotalAmount { get; set; }
        [Required(ErrorMessage = "Booking id is required")]
        public required int BookingId { get; set; }
    }
}