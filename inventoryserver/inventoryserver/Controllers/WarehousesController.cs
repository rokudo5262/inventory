using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using inventoryserver.Models;
using Microsoft.AspNetCore.Cors;

namespace inventoryserver.Controllers
{
  [Route("api/[controller]")]
  [EnableCors("MyPolicy")]
  [ApiController]
  public class WarehousesController : ControllerBase
  {
    private readonly inventoryContext _context;

    public WarehousesController(inventoryContext context)
    {
      _context = context;
    }

    // GET: api/Warehouses
    [HttpGet]
    public ActionResult<IEnumerable<Warehouse>> GetWarehouse()
    {
      return _context.Warehouse.ToList();
    }

    // GET: api/Warehouses/5
    [HttpGet("{id}")]
    public ActionResult<Warehouse> GetWarehouse(long id)
    {
      var warehouse = _context.Warehouse.Find(id);

      if (warehouse == null)
      {
        return NotFound();
      }

      return warehouse;
    }

    // PUT: api/Locations/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public IActionResult PutWarehouse(long id, Warehouse warehouse)
    {
      if (id != warehouse.Id)
      {
        return BadRequest();
      }

      _context.Entry(warehouse).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!WarehouseExists(id))
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

    // POST: api/Warehouses
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public ActionResult<Warehouse> PostWarehouse(Warehouse warehouse)
    {
      _context.Warehouse.Add(warehouse);
      _context.SaveChanges();

      return warehouse;
    }

    // DELETE: api/Warehouses/5
    [HttpDelete("{id}")]
    public ActionResult<Warehouse> DeleteWarehouse(long id)
    {
      var warehouse = _context.Warehouse.Find(id);
      if (warehouse == null)
      {
        return NotFound();
      }

      _context.Warehouse.Remove(warehouse);
      _context.SaveChanges();

      return warehouse;
    }

    private bool WarehouseExists(long id)
    {
      return _context.Warehouse.Any(e => e.Id == id);
    }
  }
}
