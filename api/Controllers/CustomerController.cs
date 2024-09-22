using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Customer;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ApplicationDBContext _context; // _context already have data (customers table, ...)
        public CustomerController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            // _context.Customers -> customers data
            var customers = _context.Customers.ToList()
                .Select(s => s.ToCustomerDto());
            return Ok(customers);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {   
            var customer = _context.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer.ToCustomerDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateCustomerRequestDto customerDto)
        {
            var customerModel = customerDto.ToCustomerFromCreateDto();
            _context.Customers.Add(customerModel);
            _context.SaveChanges();
            // return Ok(customerModel); 
            return CreatedAtAction(nameof(GetById), new { id = customerModel.Id }, customerModel);
        }
    }
}