using api.Data;
using api.Dtos.Room;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;


namespace api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  [EnableCors("AllowSpecificOrigin")]
  public class RoomController(ApplicationDBContext context, IRoomRepository roomRepo) : ControllerBase
  {
    private readonly ApplicationDBContext _context = context;
    private readonly IRoomRepository _roomRepo = roomRepo;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var rooms = await _roomRepo.GetAllAsync();
      var roomDtos = rooms.Select(s => s.ToRoomDto()).ToList();

      return Ok(roomDtos);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
      var room = await _roomRepo.GetByIdAsync(id);

      if (room == null)
        return NotFound();

      return Ok(room.ToRoomDto());
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateRoomDto roomDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      if (roomDto.ImagePaths == null || roomDto.ImagePaths.Count == 0)
      {
        return BadRequest("At least one image file is required.");
      }

      var permittedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };
      var imagePaths = new List<string>();
      var imageDirectory = Path.Combine("wwwroot", "images", "rooms", roomDto.RoomName);

      // Ensure the directory exists
      if (!Directory.Exists(imageDirectory))
      {
        Directory.CreateDirectory(imageDirectory);
      }

      foreach (var image in roomDto.ImagePaths)
      {
        var ext = Path.GetExtension(image.FileName).ToLowerInvariant();
        if (string.IsNullOrEmpty(ext) || !permittedExtensions.Contains(ext))
        {
          return BadRequest("Invalid image file type.");
        }

        // Create unique file name
        var uniqueFileName = $"{Guid.NewGuid()}_{image.FileName}";
        var sanitizedFileName = uniqueFileName.Replace(" ", "_");
        var imagePath = Path.Combine(imageDirectory, sanitizedFileName);

        try
        {
          // Save the file
          using var stream = new FileStream(imagePath, FileMode.Create);
          await image.CopyToAsync(stream);
          imagePaths.Add($"/images/rooms/{roomDto.RoomName}/{sanitizedFileName}");
        }
        catch (Exception ex)
        {
          return StatusCode(500, $"Internal server error: {ex.Message}");
        }
      }

      var room = roomDto.ToRoomFromCreateDto();
      room.ImagePaths = imagePaths;
      await _roomRepo.CreateAsync(room);

      return CreatedAtAction(nameof(GetById), new { id = room.Id }, room.ToRoomDto());
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromForm] UpdateRoomDto roomDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var existingRoom = await _roomRepo.GetByIdAsync(id);

      if (existingRoom == null)
        return NotFound("Room not found");

      await _roomRepo.UpdateAsync(id, roomDto);

      return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
      var room = await _roomRepo.DeleteAsync(id);

      if (room == null)
        return NotFound();

      return NoContent();
    }

    [HttpPost("{id:int}/image")]
    public async Task<IActionResult> AddImage(int id, [FromForm] IFormFile image)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      if (image == null || image.Length == 0)
        return BadRequest("Image file is required.");

      var existingRoom = await _roomRepo.GetByIdAsync(id);
      if (existingRoom == null)
        return NotFound("Room not found");

      // Validate the file type
      var permittedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };
      var ext = Path.GetExtension(image.FileName).ToLowerInvariant();
      if (string.IsNullOrEmpty(ext) || !permittedExtensions.Contains(ext))
      {
        return BadRequest("Invalid image file type.");
      }

      // Create unique file name
      var uniqueFileName = $"{Guid.NewGuid()}_{image.FileName}";
      var imageDirectory = Path.Combine("wwwroot", "images", "rooms", existingRoom.RoomName);
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
        await image.CopyToAsync(stream);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex.Message}");
      }

      await _roomRepo.AddImageAsync(id, $"/images/rooms/{existingRoom.RoomName}/{sanitizedFileName}");

      return NoContent();
    }

    [HttpDelete("{id:int}/image/{imagePath}")]
    public async Task<IActionResult> DeleteImage(int id, [FromRoute] string imagePath)
    {
      await _roomRepo.DeleteImageAsync(id, imagePath);
      return NoContent();
    }

    [HttpGet("room-available")]
     public async Task<IActionResult> RoomAvailable()
    {
      var count = await _roomRepo.RoomAvailable();
      return Ok(count);
    }
  }
}