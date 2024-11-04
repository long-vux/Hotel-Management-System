using api.Dtos.Employee;
using api.Models;

namespace api.Mappers
{
    public static class EmployeeMappers
    {
        public static EmployeeDto ToEmployeeDto(this Employee employeeModel)
        {
            return new EmployeeDto
            {
                Id = employeeModel.Id,
                FirstName = employeeModel.FirstName,
                LastName = employeeModel.LastName,
                DateOfBirth = employeeModel.DateOfBirth,
                Email = employeeModel.Email,
                PhoneNumber = employeeModel.PhoneNumber,
                Salary = employeeModel.Salary,
                IsWoman = employeeModel.IsWoman,
                ImagePath = employeeModel.ImagePath,
                Department = employeeModel.Department,
                Role = employeeModel.Role,
                Status = employeeModel.Status,
            };
        }

        public static Employee ToEmployeeFromCreateDto(this CreateEmployeeDto employeeDto) {
            return new Employee
            {
                FirstName = employeeDto.FirstName,
                LastName = employeeDto.LastName,
                DateOfBirth = employeeDto.DateOfBirth,
                Email = employeeDto.Email,
                PhoneNumber = employeeDto.PhoneNumber,
                Salary = employeeDto.Salary,
                Role = employeeDto.Role,
                IsWoman = employeeDto.IsWoman,
                ImagePath = string.Empty,
                Department = employeeDto.Department,
                Status = employeeDto.Status,
            };
        }
    }
}