using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using inventoryserver.Models;

namespace inventoryserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecondaryCustomerShipToAddressesController : ControllerBase
    {
        private readonly inventoryContext _context;

        public SecondaryCustomerShipToAddressesController(inventoryContext context)
        {
            _context = context;
        }

    // GET: api/SecondaryCustomerShipToAddresses
    [HttpGet]
    public ActionResult<IEnumerable<SecondaryCustomerShipToAddress>> GetSecondaryCustomerShipToAddress()
    {
      return _context.SecondaryCustomerShipToAddress.ToList();
    }

    // GET: api/SecondaryCustomerShipToAddresses/5
    [HttpGet("{id}")]
    public ActionResult<SecondaryCustomerShipToAddress> GetSecondaryCustomerShipToAddress(long id)
    {
      var secondaryCustomerShipToAddress = _context.SecondaryCustomerShipToAddress.Find(id);

      if (secondaryCustomerShipToAddress == null)
      {
        return NotFound();
      }

      return secondaryCustomerShipToAddress;
    }

    // PUT: api/SecondaryCustomerShipToAddresses/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public ActionResult<SecondaryCustomerShipToAddress> PutSecondaryCustomerShipToAddress(long id, SecondaryCustomerShipToAddress secondaryCustomerShipToAddress)
    {
      if (id != secondaryCustomerShipToAddress.Id)
      {
        return BadRequest();
      }

      _context.Entry(secondaryCustomerShipToAddress).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!SecondaryCustomerShipToAddressExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return secondaryCustomerShipToAddress;
    }

  
    [HttpPut("delete/{id}")]
    public ActionResult<SecondaryCustomerShipToAddress> updateSecondaryCustomerShipToAddress(long id)
    {
      var secondaryCustomerShipToAddress = _context.SecondaryCustomerShipToAddress.Find(id);
      if (secondaryCustomerShipToAddress == null)
      {
        return NotFound();
      }
      
        secondaryCustomerShipToAddress.Deleted = false;
      _context.Entry(secondaryCustomerShipToAddress).State = EntityState.Modified;
      //_context.SecondaryCustomerShipToAddress.Remove(secondaryCustomerShipToAddress);
      _context.SaveChanges();

      return secondaryCustomerShipToAddress;
    }
    [HttpPut("delete")]
    public ActionResult<IEnumerable<SecondaryCustomerShipToAddress>> updateSecondaryCustomerShipToAddress(long[] ids)
    {
      var secondaryCustomerShipToAddress = _context.SecondaryCustomerShipToAddress.Where(x => ids.Contains(x.Id)).ToList();
      if (secondaryCustomerShipToAddress == null)
      {
        return NotFound();
      }
      for (int i = 0; i < secondaryCustomerShipToAddress.Count; i++)
      {
        secondaryCustomerShipToAddress[i].Deleted = true;
        _context.Entry(secondaryCustomerShipToAddress[i]).State = EntityState.Modified;
      }
      _context.SaveChanges();
      return secondaryCustomerShipToAddress;
    }
    // POST: api/SecondaryCustomerShipToAddresses
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public ActionResult<SecondaryCustomerShipToAddress> PostSecondaryCustomerShipToAddress(SecondaryCustomerShipToAddress secondaryCustomerShipToAddress)
    {
      _context.SecondaryCustomerShipToAddress.Add(secondaryCustomerShipToAddress);
      _context.SaveChanges();

      return CreatedAtAction("GetSecondaryCustomerShipToAddress", new { id = secondaryCustomerShipToAddress.Id }, secondaryCustomerShipToAddress);
    }

    // DELETE: api/SecondaryCustomerShipToAddresses/5
    [HttpDelete("{id}")]
    public ActionResult<SecondaryCustomerShipToAddress> DeleteSecondaryCustomerShipToAddress(long id)
    {
      var secondaryCustomerShipToAddress = _context.SecondaryCustomerShipToAddress.Find(id);
      if (secondaryCustomerShipToAddress == null)
      {
        return NotFound();
      }

      _context.SecondaryCustomerShipToAddress.Remove(secondaryCustomerShipToAddress);
      _context.SaveChanges();

      return secondaryCustomerShipToAddress;
    }

    private bool SecondaryCustomerShipToAddressExists(long id)
        {
            return _context.SecondaryCustomerShipToAddress.Any(e => e.Id == id);
        }
    }
}
