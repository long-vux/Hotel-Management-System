using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class PaymentQueryObject
    {
        public int? Id { get; set; } = null;
        public String? PaymentMethod { get; set; } = null;
    }
}