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
        Task<Employee?> UpdateAsync(int id, UpdateEmployeeDto employeeModel);
        Task<Employee?> DeleteAsync(int id);
    }
}