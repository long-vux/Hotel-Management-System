using api.Data;
using api.Dtos.Payment;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class PaymentController(ApplicationDBContext context, IPaymentRepository paymentRepo, IBookingRepository bookingRepository) : ControllerBase
  {
    private readonly ApplicationDBContext _context = context;
    private readonly IPaymentRepository _paymentRepo = paymentRepo;
    private readonly IBookingRepository _bookingRepository = bookingRepository;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var payments = await _paymentRepo.GetAllAsync();
      var paymentDtos = payments.Select(s => s.ToPaymentDto()).ToList();
      
      return Ok(paymentDtos);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult>  GetById(int id)
    {
      var payment = await _paymentRepo.GetByIdAsync(id);

      if (payment == null)
        return NotFound();

      return Ok(payment.ToPaymentDto());
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreatePaymentDto paymentDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var payment = paymentDto.ToPaymentFromCreateDto();

      var booking = await _bookingRepository.GetByIdAsync(paymentDto.BookingId);
      if (booking == null)
        return NotFound("Booking not found");

      payment.Booking = booking;

      await _paymentRepo.CreateAsync(payment);

      return CreatedAtAction(nameof(GetById), new { id = payment.Id }, payment.ToPaymentDto());
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromForm] UpdatePaymentDto paymentDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var existingPayment = await _paymentRepo.GetByIdAsync(id);
      if (existingPayment == null)
        return NotFound("Payment not found");

      var payment = paymentDto.ToPaymentFromUpdateDto();

      await _paymentRepo.UpdateAsync(id, payment);

      return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
      var payment = await _paymentRepo.DeleteAsync(id);
      
      if (payment == null)
        return NotFound();

      return NoContent();
    }
  }
}