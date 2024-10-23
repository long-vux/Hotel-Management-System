using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Customer;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CustomerRepository(ApplicationDBContext context) : ICustomerRepository
    {
        private readonly ApplicationDBContext _context = context;

        public async Task<Customer> CreateAsync(Customer customerModel)
        {
            await _context.Customers.AddAsync(customerModel);
            await _context.SaveChangesAsync();
            return customerModel;
        }

        public async Task<Customer?> DeleteAsync(int id)
        {
            var customerModel = await _context.Customers.FirstOrDefaultAsync(x => x.Id == id);
            if(customerModel == null) 
            {
                return null;
            }
            _context.Customers.Remove(customerModel);
            await _context.SaveChangesAsync();
            return customerModel;
        }

        public async Task<List<Customer>> GetAllAsync(QueryObject query)
        {
            var customers = _context.Customers.Include(c => c.Comments).AsQueryable();
            
            if(!string.IsNullOrEmpty(query.CustomerName))
            {
                customers = customers.Where(c => c.FirstName.Contains(query.CustomerName) || c.LastName.Contains(query.CustomerName));
            }
            return await customers.ToListAsync();
        }

        public async Task<Customer?> GetByIdAsync(int id)
        {
            return await _context.Customers.Include(c => c.Comments).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Customer?> UpdateAsync(int id, UpdateCustomerDto customerDto)
        {
            var existingCustomer = await _context.Customers.FirstOrDefaultAsync(x => x.Id == id);
            if(existingCustomer == null)
            {
                return null;
            }

            existingCustomer.FirstName = customerDto.FirstName;
            existingCustomer.LastName = customerDto.LastName;
            existingCustomer.Email = customerDto.Email;
            existingCustomer.PhoneNumber = customerDto.PhoneNumber;
            existingCustomer.Address = customerDto.Address;
            existingCustomer.City = customerDto.City;
            existingCustomer.Country = customerDto.Country;
            existingCustomer.RegistrationDate = customerDto.RegistrationDate;
        
            await _context.SaveChangesAsync();
            
            return existingCustomer;        
        }

        public Task<bool> CustomerExists(int id)
        {
            return _context.Customers.AnyAsync(s => s.Id == id);
        }
    }
}