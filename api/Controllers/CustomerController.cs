using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Customer;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController(ApplicationDBContext context, ICustomerRepository customerRepo) : ControllerBase
    {
        private readonly ApplicationDBContext _context = context; // _context already have data (customers table, ...)
        private readonly ICustomerRepository _customerRepo = customerRepo;

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            // _context.Customers -> customers data
            var customers = await _customerRepo.GetAllAsync(query);
            
            var customerDtos = customers.Select(s => s.ToCustomerDto()).ToList();
;
            return Ok(customerDtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {   
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var customer = await _customerRepo.GetByIdAsync(id);

            if (customer == null)
                return NotFound();
                
            return Ok(customer.ToCustomerDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customerModel = customerDto.ToCustomerFromCreateDto();

            await _customerRepo.CreateAsync(customerModel);

            return CreatedAtAction(nameof(GetById), new { id = customerModel.Id }, customerModel.ToCustomerDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCustomerDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var customerModel = await _customerRepo.UpdateAsync(id, updateDto);

            if(customerModel == null)
                return NotFound();
            
            return Ok(customerModel.ToCustomerDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var customerModel = await _customerRepo.DeleteAsync(id);

            if(customerModel == null) 
                return NotFound();

            return NoContent();
        }
    }
}