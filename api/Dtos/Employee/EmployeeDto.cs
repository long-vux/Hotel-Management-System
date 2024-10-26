using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Employee
{
    public class EmployeeDto
    {
        public int Id { get; set; }
        public required string FirstName { get; set; } = string.Empty;
        public required string LastName { get; set; } = string.Empty;
        public required string Salary { get; set; } = string.Empty;
        public required string PhoneNumber { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;
        public required bool IsWoman { get; set; } 
        public required string ImagePath { get; set; } = string.Empty;
    }
}