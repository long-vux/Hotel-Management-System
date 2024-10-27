namespace api.Dtos.Payment
{
    public class UpdatePaymentDto
    {
        public required DateTime PaymentDate { get; set; }
        public required string PaymentMethod { get; set; } = string.Empty;
        public required int TotalAmount { get; set; }
    }
}