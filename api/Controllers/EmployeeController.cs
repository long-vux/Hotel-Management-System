using api.Data;
using api.Dtos.Employee;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  [EnableCors("AllowSpecificOrigin")]
  public class EmployeeController(ApplicationDBContext context, IEmployeeRepository employeeRepo) : ControllerBase
  {
    private readonly ApplicationDBContext _context = context;
    private readonly IEmployeeRepository _employeeRepo = employeeRepo;

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] EmployeeQueryObject query)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var employees = await _employeeRepo.GetAllAsync(query);

      var employeeDtos = employees.Select(s => s.ToEmployeeDto()).ToList();

      return Ok(employeeDtos);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
      var employee = await _employeeRepo.GetByIdAsync(id);

      if (employee == null)
        return NotFound();

      return Ok(employee.ToEmployeeDto());
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateEmployeeDto employeeDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      if (employeeDto.Image == null || employeeDto.Image.Length == 0)
      {
        return BadRequest("Image file is required.");
      }

      // Validate the file type
      var permittedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };
      var ext = Path.GetExtension(employeeDto.Image.FileName).ToLowerInvariant();
      if (string.IsNullOrEmpty(ext) || !permittedExtensions.Contains(ext))
      {
        return BadRequest("Invalid image file type.");
      }

      // Create unique file name
      var uniqueFileName = $"{Guid.NewGuid()}_{employeeDto.Image.FileName}";
      var imageDirectory = Path.Combine("wwwroot", "images", "employees");
      if (!Directory.Exists(imageDirectory))
      {
        Directory.CreateDirectory(imageDirectory);
      }

      var sanitizedFileName = uniqueFileName.Replace(" ", "_");
      var imagePath = Path.Combine(imageDirectory, sanitizedFileName);

      try
      {
        // Save the file
        using var stream = new FileStream(imagePath, FileMode.Create);
        await employeeDto.Image.CopyToAsync(stream);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex.Message}");
      }

      // Create the employee and save to the database
      var employee = employeeDto.ToEmployeeFromCreateDto();
      employee.ImagePath = $"/images/employees/{sanitizedFileName}";
      await _employeeRepo.CreateAsync(employee);

      return CreatedAtAction(nameof(GetById), new { id = employee.Id }, employee.ToEmployeeDto());
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromForm] UpdateEmployeeDto employeeDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      // Retrieve existing employee from database to get current ImagePath
      var existingEmployee = await _employeeRepo.GetByIdAsync(id);
      if (existingEmployee == null)
        return NotFound("Employee not found");

      if (employeeDto.Image != null)
      {
        // Validate the file type
        var permittedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };
        var ext = Path.GetExtension(employeeDto.Image.FileName).ToLowerInvariant();
        if (string.IsNullOrEmpty(ext) || !permittedExtensions.Contains(ext))
        {
          return BadRequest("Invalid image file type.");
        }

        // Create unique file name
        var uniqueFileName = $"{Guid.NewGuid()}_{employeeDto.Image.FileName}";
        var imageDirectory = Path.Combine("wwwroot", "images", "employees");
        if (!Directory.Exists(imageDirectory))
        {
          Directory.CreateDirectory(imageDirectory);
        }

        var sanitizedFileName = uniqueFileName.Replace(" ", "_");
        var imagePath = Path.Combine(imageDirectory, sanitizedFileName);

        try
        {
          // Save the file
          using var stream = new FileStream(imagePath, FileMode.Create);
          await employeeDto.Image.CopyToAsync(stream);

          // Delete old image
          if (!string.IsNullOrEmpty(existingEmployee.ImagePath))
          {
            var oldImagePath = Path.Combine("wwwroot", existingEmployee.ImagePath.TrimStart('/'));
            if (System.IO.File.Exists(oldImagePath))
              System.IO.File.Delete(oldImagePath);
          }

          employeeDto.ImagePath = $"/images/employees/{sanitizedFileName}";
        }
        catch (Exception)
        {
          return BadRequest("Failed to upload image.");
        }
      }

      await _employeeRepo.UpdateAsync(id, employeeDto);

      return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
      var employee = await _employeeRepo.DeleteAsync(id);
      if (employee == null)
        return NotFound();
      return NoContent();
    }
  }
}