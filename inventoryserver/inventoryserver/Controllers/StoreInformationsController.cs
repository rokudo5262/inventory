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
    public class StoreInformationsController : ControllerBase
    {
        private readonly inventoryContext _context;

        public StoreInformationsController(inventoryContext context)
        {
            _context = context;
        }

    // GET: api/StoreInformations
    [HttpGet]
    public ActionResult<IEnumerable<StoreInformation>> GetStoreInformation()
    {
      return _context.StoreInformation.ToList();
    }

    // GET: api/StoreInformations/5
    [HttpGet("{id}")]
    public ActionResult<StoreInformation> GetStoreInformation(long id)
    {
      var storeInformation = _context.StoreInformation.Find(id);

      if (storeInformation == null)
      {
        return NotFound();
      }

      return storeInformation;
    }

    // PUT: api/StoreInformations/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public IActionResult PutStoreInformation(long id, StoreInformation storeInformation)
    {
      if (id != storeInformation.Id)
      {
        return BadRequest();
      }

      _context.Entry(storeInformation).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!StoreInformationExists(id))
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

    // POST: api/StoreInformations
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public ActionResult<StoreInformation> PostStoreInformation(StoreInformation storeInformation)
    {
      _context.StoreInformation.Add(storeInformation);
      _context.SaveChanges();

      return CreatedAtAction("GetStoreInformation", new { id = storeInformation.Id }, storeInformation);
    }

    // DELETE: api/StoreInformations/5
    [HttpDelete("{id}")]
    public ActionResult<StoreInformation> DeleteStoreInformation(long id)
    {
      var storeInformation = _context.StoreInformation.Find(id);
      if (storeInformation == null)
      {
        return NotFound();
      }

      _context.StoreInformation.Remove(storeInformation);
      _context.SaveChanges();

      return storeInformation;
    }

    private bool StoreInformationExists(long id)
        {
            return _context.StoreInformation.Any(e => e.Id == id);
        }
    }
}
