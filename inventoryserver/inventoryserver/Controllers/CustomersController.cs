using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inventoryserver.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace inventoryserver.Controllers
{
  [Route("api/[controller]")]
  [EnableCors("MyPolicy")]
  [ApiController]
  public class CustomersController : ControllerBase
  {
    private readonly inventoryContext _context;

    public CustomersController(inventoryContext context)
    {
      _context = context;
    }

    // GET: api/Customers
    [HttpGet]
    public ActionResult<IEnumerable<Customer>> GetCustomer()
    {
      return _context.Customer.ToList();
    }

    // GET: api/Customers/5
    [HttpGet("{id}")]
    public ActionResult<Customer> GetCustomer(long id)
    {
      var customer = _context.Customer.Find(id);

      if (customer == null)
      {
        return NotFound();
      }

      return customer;
    }

    // PUT: api/Customers/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public IActionResult PutCustomer(long id, Customer customer)
    {
      if (id != customer.Id)
      {
        return BadRequest();
      }

      _context.Entry(customer).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CustomerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Customers
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public ActionResult<Customer> PostCustomer(Customer customer)
    {
      _context.Customer.Add(customer);
      _context.SaveChanges();

      return customer;
    }

    // DELETE: api/Customers/5
    [HttpDelete("{id}")]
    public ActionResult<Customer> DeleteCustomer(long id)
    {
      var customer = _context.Customer.Find(id);
      if (customer == null)
      {
        return NotFound();
      }

      _context.Customer.Remove(customer);
      _context.SaveChanges();

      return customer;
    }

    private bool CustomerExists(long id)
    {
      return _context.Customer.Any(e => e.Id == id);
    }
  }
}
