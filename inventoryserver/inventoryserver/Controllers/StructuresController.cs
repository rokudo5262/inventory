using inventoryserver.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;



using System.Net;

namespace inventoryserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StructuresController : ControllerBase
    {
        private readonly inventoryContext _context;
        public StructuresController(inventoryContext context)
        {
            _context = context;
        }
   
        // GET: api/Structures
        [HttpGet]
        public ActionResult<IEnumerable<Structure>> GetStructure()
        {
          return _context.Structure.ToList();
        }

        // GET: api/Structures/5
        [HttpGet("{id}")]
        public ActionResult<Structure> GetStructure(long id)
        {
          var structure = _context.Structure.Find(id);

          if (structure == null)
          {
            return NotFound();
          }

          return structure;
        }

    // PUT: api/Structures/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public IActionResult PutStructure(long id, Structure structure)
    {
      if (id != structure.Id)
      {
        return BadRequest();
      }
    
      _context.Entry(structure).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!StructureExists(id))
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

    // POST: api/Structures
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
        public ActionResult<Structure> PostStructure(Structure structure)
        {
          _context.Structure.Add(structure);
          _context.SaveChanges();

          return CreatedAtAction("GetStructure", new { id = structure.Id }, structure);
        }


    // DELETE: api/Structures/5
    [HttpPut("delete/{id}")]
    public ActionResult<Structure> DeleteStructure(long id)
    {

      var structure = _context.Structure.Find(id);
      if (structure == null)
      {
        return NotFound();
      }
      structure.Delete1 = true;
      _context.Entry(structure).State = EntityState.Modified;
      //_context.Structure.Remove(structure);
      _context.SaveChanges();
      return structure;
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<Structure>> DeleteStructures(long[] ids)
    {

      var structure = _context.Structure.Where(x => ids.Contains(x.Id)).ToList();
      if (structure == null)
      {
        return NotFound();
      }
      for (int i = 0; i < structure.Count; i++)
      {
        structure[i].Delete1 = true;
        _context.Entry(structure[i]).State = EntityState.Modified;
      }
      _context.SaveChanges();
      return structure;
    }


    private bool StructureExists(long id)
        {
            return _context.Structure.Any(e => e.Id == id);
        }

    }
}
