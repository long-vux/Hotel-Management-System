using api.Data;
using api.Dtos.Payment;
using api.Interfaces;
using api.Mappers;
using api.Models;
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

      var isBookingExists = await _bookingRepository.IsBookingExists(paymentDto.BookingId);

      if (!isBookingExists)
        return NotFound("Booking not found");

      var payment = paymentDto.ToPaymentFromCreateDto();
      
      await _paymentRepo.CreateAsync(payment);

      return CreatedAtAction(nameof(GetById), new { id = payment.Id }, payment.ToPaymentDto());
    }

    // [HttpPut("{id:int}")]
    // public async Task<IActionResult> Update(int id, [FromForm] UpdatePaymentDto paymentDto)
    // {
    //   if (!ModelState.IsValid)
    //     return BadRequest(ModelState);

    //   // Retrieve existing employee from database to get current ImagePath
    //   var existingEmployee = await _employeeRepo.GetByIdAsync(id);
    //   if (existingEmployee == null)
    //     return NotFound("Employee not found");

    //   var employee = employeeDto.ToEmployeeFromUpdateDto();

    //   if (employeeDto.Image != null)
    //   {
    //     // Validate the file type
    //     var permittedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };
    //     var ext = Path.GetExtension(employeeDto.Image.FileName).ToLowerInvariant();
    //     if (string.IsNullOrEmpty(ext) || !permittedExtensions.Contains(ext))
    //     {
    //       return BadRequest("Invalid image file type.");
    //     }

    //     // Create unique file name
    //     var uniqueFileName = $"{Guid.NewGuid()}_{employeeDto.Image.FileName}";
    //     var imageDirectory = Path.Combine("wwwroot", "images", "employees");
    //     if (!Directory.Exists(imageDirectory))
    //     {
    //       Directory.CreateDirectory(imageDirectory);
    //     }

    //     var sanitizedFileName = uniqueFileName.Replace(" ", "_");
    //     var imagePath = Path.Combine(imageDirectory, sanitizedFileName);

    //     try
    //     {
    //       // Save the file
    //       using var stream = new FileStream(imagePath, FileMode.Create);
    //       await employeeDto.Image.CopyToAsync(stream);

    //       // Delete old image
    //       if (!string.IsNullOrEmpty(existingEmployee.ImagePath))
    //       {
    //         var oldImagePath = Path.Combine("wwwroot", existingEmployee.ImagePath.TrimStart('/'));
    //         if (System.IO.File.Exists(oldImagePath))
    //           System.IO.File.Delete(oldImagePath);
    //       }

    //       employee.ImagePath = $"/images/employees/{sanitizedFileName}";
    //     }
    //     catch (Exception)
    //     {
    //       return BadRequest("Failed to upload image.");
    //     }
    //   }

    //   await _employeeRepo.UpdateAsync(id, employee);

    //   return NoContent();
    // }

    // [HttpDelete("{id:int}")]
    // public async Task<IActionResult> Delete(int id)
    // {
    //   var employee = await _employeeRepo.DeleteAsync(id);
    //   if (employee == null)
    //     return NotFound();
    //   return NoContent();
    // }
  }
}