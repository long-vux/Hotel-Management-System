using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Customer;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ApplicationDBContext _context; // _context already have data (customers table, ...)
        private readonly ICustomerRepository _customerRepo;
        public CustomerController(ApplicationDBContext context, ICustomerRepository customerRepo)
        {
            _customerRepo = customerRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            // _context.Customers -> customers data
            var customers = await _customerRepo.GetAllAsync();
            var customerDto = customers.Select(s => s.ToCustomerDto());
            return Ok(customers);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {   
            var customer = await _customerRepo.GetByIdAsync(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer.ToCustomerDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCustomerRequestDto customerDto)
        {
            var customerModel = customerDto.ToCustomerFromCreateDto();
            await _customerRepo.CreateAsync(customerModel);
            // return Ok(customerModel); 
            return CreatedAtAction(nameof(GetById), new { id = customerModel.Id }, customerModel);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCustomerRequestDto updateDto)
        {
            var customerModel = await _customerRepo.UpdateAsync(id, updateDto);
            if(customerModel == null)
            {
                return NotFound();
            }
            return Ok(customerModel.ToCustomerDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var customerModel = await _customerRepo.DeleteAsync(id);
            if(customerModel == null) 
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}