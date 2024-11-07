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
            var queryString = query.QueryString;

            if (!string.IsNullOrEmpty(queryString))
            {
                employees = employees.Where(e =>
                    (e.FirstName + " " + e.LastName).Contains(queryString) ||
                    e.Role.Contains(queryString) ||
                    e.Status.Contains(queryString) ||
                    e.Department.Contains(queryString) ||
                    e.PhoneNumber.Contains(queryString) ||
                    e.Email.Contains(queryString) ||
                    e.Address.Contains(queryString)
                );

                if (DateTime.TryParse(queryString, out DateTime parsedDate))
                {
                    employees = employees.Where(e => e.DateOfBirth.Date == parsedDate.Date);
                }
            }

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

            if (!string.IsNullOrEmpty(employeeModel.FirstName))
                existingEmployee.FirstName = employeeModel.FirstName;

            if (!string.IsNullOrEmpty(employeeModel.LastName))
                existingEmployee.LastName = employeeModel.LastName;

            if (employeeModel.DateOfBirth != null)
                existingEmployee.DateOfBirth = employeeModel.DateOfBirth ?? existingEmployee.DateOfBirth;

            if (!string.IsNullOrEmpty(employeeModel.Role))
                existingEmployee.Role = employeeModel.Role;

            if (!string.IsNullOrEmpty(employeeModel.Status))
                existingEmployee.Role = employeeModel.Status;

            if (!string.IsNullOrEmpty(employeeModel.Email))
                existingEmployee.Email = employeeModel.Email;

            if (!string.IsNullOrEmpty(employeeModel.PhoneNumber))
                existingEmployee.PhoneNumber = employeeModel.PhoneNumber;

            if (employeeModel.Salary != null)
                existingEmployee.Salary = employeeModel.Salary;

            if (employeeModel.IsWoman != null)
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

