using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Customer;
using api.Dtos.Employee;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IBookingRepository
    {
        // Task<List<Booking>> GetAllAsync();
        // Task<Booking?> GetByIdAsync(int id); // use ? because FirstOrDefault() can be returned null
        // Task<Booking> CreateAsync(Booking bookingModel);
        // Task<Booking?> UpdateAsync(int id, Booking bookingModel);
        // Task<Booking?> DeleteAsync(int id);
        Task<bool> IsBookingExists(int id);
    }
}