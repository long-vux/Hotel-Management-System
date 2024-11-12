using System;
using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Payment
{
    public class CreatePaymentDto
    {
        public string PaymentMethod { get; set; } = string.Empty;
        public int TotalAmount { get; set; }
        public int BookingId { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}