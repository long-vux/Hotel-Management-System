using api.Data;
using api.Dtos.Employee;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class EmployeeRepository(ApplicationDBContext context) : IEmployeeRepository
    {
        private readonly ApplicationDBContext _context = context;

        public async Task<Employee> CreateAsync(Employee employeeModel)
        {
            await _context.Employees.AddAsync(employeeModel);
            await _context.SaveChangesAsync();
            return employeeModel;
        }

        public async Task<Employee?> DeleteAsync(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
                return null;
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return employee;
        }

        public async Task<List<Employee>> GetAllAsync(EmployeeQueryObject query)
        {
            var employees = _context.Employees.AsQueryable();
            var name = employees.Select(e => e.FirstName + " " + e.LastName);

            if (query.Id != null)
                employees = employees.Where(e => e.Id == query.Id);
            if (!string.IsNullOrEmpty(query.Name))
                employees = employees.Where(e => name.Contains(query.Name));
            if (!string.IsNullOrEmpty(query.Email))
                employees = employees.Where(e => e.Email.Contains(query.Email));
            if (!string.IsNullOrEmpty(query.Phone))
                employees = employees.Where(e => e.PhoneNumber.Contains(query.Phone));

            return await employees.ToListAsync();
        }

        public async Task<Employee?> GetByIdAsync(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        public async Task<Employee?> UpdateAsync(int id, UpdateEmployeeDto employeeModel)
        {
            var existingEmployee = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (existingEmployee == null)
                return null;

            // Update only the fields that are provided
            if (!string.IsNullOrEmpty(employeeModel.FirstName))
                existingEmployee.FirstName = employeeModel.FirstName;

            if (!string.IsNullOrEmpty(employeeModel.LastName))
                existingEmployee.LastName = employeeModel.LastName;

            if (!string.IsNullOrEmpty(employeeModel.Email))
                existingEmployee.Email = employeeModel.Email;

            if (!string.IsNullOrEmpty(employeeModel.PhoneNumber))
                existingEmployee.PhoneNumber = employeeModel.PhoneNumber;

            if (employeeModel.Salary != null) // Assuming Salary can be null
                existingEmployee.Salary = employeeModel.Salary;

            if (employeeModel.IsWoman != null) // Assuming IsWoman is a nullable boolean
                existingEmployee.IsWoman = employeeModel.IsWoman ?? false;

            if (!string.IsNullOrEmpty(employeeModel.ImagePath))
                existingEmployee.ImagePath = employeeModel.ImagePath;

            if (!string.IsNullOrEmpty(employeeModel.Department))
                existingEmployee.Department = employeeModel.Department;

            await _context.SaveChangesAsync();
            return existingEmployee;
        }
    }
}

