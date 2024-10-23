using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Customer;
using api.Dtos.Comment;
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
                Email = customerModel.Email,
                PhoneNumber = customerModel.PhoneNumber,
                Address = customerModel.Address,
                City = customerModel.City,
                Country = customerModel.Country,
                Comments = customerModel.Comments.Select(c => c.ToCommentDto()).ToList(),
            };
        }

        public static Customer ToCustomerFromCreateDto(this CreateCustomerDto customerDto) {
            return new Customer
            {
                FirstName = customerDto.FirstName,
                LastName = customerDto.LastName,
                Email = customerDto.Email,
                PhoneNumber = customerDto.PhoneNumber,
                Address = customerDto.Address,
                City = customerDto.City,
                Country = customerDto.Country,
            };
        }
    }
}