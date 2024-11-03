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

        public async Task<List<Customer>> GetAllAsync(CustomerQueryObject query)
        {
            var customers = _context.Customers.Include(c => c.Bookings).AsQueryable();
            
            if(!string.IsNullOrEmpty(query.Name))
            {
                customers = customers.Where(c => c.FirstName.Contains(query.Name) || c.LastName.Contains(query.Name));
            }
            return await customers.ToListAsync();
        }

        public async Task<Customer?> GetByIdAsync(int id)
        {
            return await _context.Customers.Include(c => c.Bookings).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Customer?> UpdateAsync(int id, UpdateCustomerDto customerDto)
        {
            var existingCustomer = await _context.Customers.FirstOrDefaultAsync(x => x.Id == id);
            
            if(existingCustomer == null) return null;

            existingCustomer.FirstName = customerDto.FirstName;
            existingCustomer.LastName = customerDto.LastName;
            existingCustomer.Email = customerDto.Email;
            existingCustomer.PhoneNumber = customerDto.PhoneNumber;
            existingCustomer.IdentityNumber = customerDto.IdentityNumber;
            existingCustomer.IdentityType = customerDto.IdentityType;

            await _context.SaveChangesAsync();
            
            return existingCustomer;        
        }

        public async Task<bool> CustomerExists(int id)
        {
            return await _context.Customers.AnyAsync(s => s.Id == id);
        }
    }
}