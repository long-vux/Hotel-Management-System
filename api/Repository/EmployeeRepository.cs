using System.Threading.Tasks;
using api.Data;
using api.Dtos.Employee;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
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

        public async Task<Employee?> UpdateAsync(int id, Employee employeeModel)
        {
            var existingEmployee = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (existingEmployee == null)
                return null;

            existingEmployee.FirstName = employeeModel.FirstName;
            existingEmployee.LastName = employeeModel.LastName;
            existingEmployee.Email = employeeModel.Email;
            existingEmployee.PhoneNumber = employeeModel.PhoneNumber;
            existingEmployee.Salary = employeeModel.Salary;
            existingEmployee.IsWoman = employeeModel.IsWoman;

            if (!string.IsNullOrEmpty(employeeModel.ImagePath))
            {
                existingEmployee.ImagePath = employeeModel.ImagePath;
            }

            await _context.SaveChangesAsync();
            return existingEmployee;
        }

    }
}

