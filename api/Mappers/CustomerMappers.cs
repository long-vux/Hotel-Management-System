using api.Dtos.Customer;
using api.Models;

namespace api.Mappers
{
    public static class CustomerMappers
    {
        public static CustomerDto ToCustomerDto(this Customer customerModel)
        {
            return new CustomerDto
            {
                Id = customerModel.Id,
                FirstName = customerModel.FirstName,
                LastName = customerModel.LastName,
                Email = customerModel.Email ?? string.Empty,
                IdentityNumber = customerModel.IdentityNumber ?? string.Empty,
                IdentityType = customerModel.IdentityType ?? string.Empty,
                PhoneNumber = customerModel.PhoneNumber,
                Bookings = customerModel.Bookings.Select(b => b.ToBookingDto()).ToList(),
            };
        }

        public static Customer ToCustomerFromCreateDto(this CreateCustomerDto customerDto) {
            return new Customer
            {
                FirstName = customerDto.FirstName,
                LastName = customerDto.LastName,
                Email = customerDto.Email,
                IdentityNumber = customerDto.IdentityNumber,
                IdentityType = customerDto.IdentityType,
                PhoneNumber = customerDto.PhoneNumber,
            };
        }

        public static Customer ToCustomerFromUpdateDto(this UpdateCustomerDto customerDto) {
            return new Customer
            {
                FirstName = customerDto.FirstName,
                LastName = customerDto.LastName,
                Email = customerDto.Email,
                IdentityNumber = customerDto.IdentityNumber,
                IdentityType = customerDto.IdentityType,
                PhoneNumber = customerDto.PhoneNumber,
            };
        }
    }
}