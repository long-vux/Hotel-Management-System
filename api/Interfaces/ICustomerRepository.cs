using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Customer;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface ICustomerRepository
    {
        Task<List<Customer>> GetAllAsync(QueryObject query);
        Task<Customer?> GetByIdAsync(int id); // use ? because FirstOrDefault() can be returned null
        Task<Customer> CreateAsync(Customer customerModel);
        Task<Customer?> UpdateAsync(int id, UpdateCustomerDto customerDto);
        Task<Customer?> DeleteAsync(int id);
        Task<bool> CustomerExists(int id);
    }
}