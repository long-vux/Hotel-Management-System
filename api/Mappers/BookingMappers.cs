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
                IsCheckIn = bookingModel.IsCheckIn,
                IsCheckout = bookingModel.IsCheckout,
                Status = bookingModel.Status,
                TotalAmount = bookingModel.TotalAmount,
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
                CheckInDate = bookingDto.CheckInDate ?? DateTime.MinValue,
                CheckOutDate = bookingDto.CheckOutDate ?? DateTime.MinValue,
                Status = "Pending",
                IsCheckIn = false,
                IsCheckout = false,
                CustomerId = bookingDto.CustomerId,
                RoomId = bookingDto.RoomId,
                Customer = null!,
                Room = null!
            };
        }

    }
}