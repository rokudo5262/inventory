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
    public class StructureValuesController : ControllerBase
    {
        private readonly inventoryContext _context;

        public StructureValuesController(inventoryContext context)
        {
            _context = context;
        }

    // GET: api/StructureValues
    [HttpGet]
    public ActionResult<IEnumerable<StructureValue>> GetStructureValue()
    {
      return _context.StructureValue.ToList();
    }

    // GET: api/StructureValues/5
    [HttpGet("{id}")]
    public ActionResult<StructureValue> GetStructureValue(long id)
    {
      var structureValue = _context.StructureValue.Find(id);

      if (structureValue == null)
      {
        return NotFound();
      }

      return structureValue;
    }

    // PUT: api/StructureValues/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public IActionResult PutStructureValue(long id, StructureValue structureValue)
    {
      if (id != structureValue.Id)
      {
        return BadRequest();
      }

      _context.Entry(structureValue).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!StructureValueExists(id))
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

    // POST: api/StructureValues
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public ActionResult<StructureValue> PostStructureValue(StructureValue structureValue)
    {
      _context.StructureValue.Add(structureValue);
      _context.SaveChanges();

      return CreatedAtAction("GetStructureValue", new { id = structureValue.Id }, structureValue);
    }

    // DELETE: api/StructureValues/5
    [HttpPut("delete/{id}")]
    public ActionResult<StructureValue> DeleteStructureValue(long id)
    {
      var structureValue = _context.StructureValue.Find(id);
      if (structureValue == null)
      {
        return NotFound();
      }
      structureValue.Delete2 = true;
      _context.Entry(structureValue).State = EntityState.Modified;
      //_context.StructureValue.Remove(structureValue);
      _context.SaveChanges();

      return structureValue;
    }
    [HttpPut("delete")]
    public ActionResult<IEnumerable<StructureValue>> DeleteStructures(long[] ids)
    {

      var structureValue = _context.StructureValue.Where(x => ids.Contains(x.Id)).ToList();
      if (structureValue == null)
      {
        return NotFound();
      }
      for (int i = 0; i < structureValue.Count; i++)
      {
        structureValue[i].Delete2 = true;
        _context.Entry(structureValue[i]).State = EntityState.Modified;
      }
      _context.SaveChanges();
      return structureValue;
    }
    private bool StructureValueExists(long id)
        {
            return _context.StructureValue.Any(e => e.Id == id);
        }
    }
}
