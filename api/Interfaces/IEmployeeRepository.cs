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
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetAllAsync(EmployeeQueryObject query);
        Task<Employee?> GetByIdAsync(int id); // use ? because FirstOrDefault() can be returned null
        Task<Employee> CreateAsync(Employee employeeModel);
        Task<Employee?> UpdateAsync(int id, Employee employeeModel);
        Task<Employee?> DeleteAsync(int id);
    }
}