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
                IdentityNumber = customerModel.IdentityNumber,
                IdentityType = customerModel.IdentityType,
                PhoneNumber = customerModel.PhoneNumber,
                Bookings = customerModel.Bookings.Select(b => b.ToBookingDto()).ToList(),
            };
        }

        public static Customer ToCustomerFromCreateDto(this CreateCustomerDto customerDto) {
            return new Customer
            {
                FirstName = customerDto.FirstName,
                LastName = customerDto.LastName,
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
                IdentityNumber = customerDto.IdentityNumber,
                IdentityType = customerDto.IdentityType,
                PhoneNumber = customerDto.PhoneNumber,
            };
        }
    }
}