namespace api.Dtos.Payment
{
    public class UpdatePaymentDto
    {
        public DateTime? PaymentDate { get; set; }
        public string PaymentMethod { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public int TotalAmount { get; set; }

        internal UpdatePaymentDto ToPaymentFromUpdateDto()
        {
            throw new NotImplementedException();
        }
    }
}