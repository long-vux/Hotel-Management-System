using api.Dtos.Booking;
using api.Models;

namespace api.Mappers
{
    public static class BookingMappers
    {
        public static BookingDto ToBookingDto(this Booking bookingModel)
        {
            return new BookingDto
            {
                Id = bookingModel.Id,
                BookingDate = bookingModel.BookingDate,
                GuestNumber = bookingModel.GuestNumber,
                CheckInDate = bookingModel.CheckInDate,
                CheckOutDate = bookingModel.CheckOutDate,
                Status = bookingModel.Status,
                CustomerId = bookingModel.CustomerId,
                RoomId = bookingModel.RoomId
            };
        }

        public static Booking ToBookingFromCreateDto(this CreateBookingDto bookingDto)
        {
            return new Booking
            {
                BookingDate = DateTime.Now,
                GuestNumber = bookingDto.GuestNumber,
                CheckInDate = bookingDto.CheckInDate,
                CheckOutDate = DateTime.MinValue, // TODO: Add check out date
                Status = "Pending",
                CustomerId = bookingDto.CustomerId,
                RoomId = bookingDto.RoomId,
                Customer = null!,
                Room = null!
            };
        }

    }
}