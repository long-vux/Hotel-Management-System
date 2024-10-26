using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class EmployeeQueryObject
    {
        public int? Id { get; set; } = null;
        public String? Name { get; set; } = null;
        public String? Email { get; set; } = null;
        public String? Phone { get; set; } = null;
    }
}