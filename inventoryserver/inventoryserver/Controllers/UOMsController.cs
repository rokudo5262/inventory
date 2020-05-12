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
    public class UOMsController : ControllerBase
    {
        private readonly inventoryContext _context;

        public UOMsController(inventoryContext context)
        {
          _context = context;
        }

        // GET: api/UOMs
        [HttpGet]
        public ActionResult<IEnumerable<UOM>> GetUOM()
        {
          return _context.UOM.ToList();
        }

        // GET: api/UOMs/5
        [HttpGet("{id}")]
        public ActionResult<UOM> GetUOM(long id)
        {
          var uom = _context.UOM.Find(id);

          if (uom == null)
          {
            return NotFound();
          }

          return uom;
        }

        // PUT: api/UOMs/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public IActionResult PutUOM(long id, UOM uom)
        {
          if (id != uom.Id)
          {
            return BadRequest();
          }

          _context.Entry(uom).State = EntityState.Modified;

          try
          {
            _context.SaveChanges();
          }
          catch (DbUpdateConcurrencyException)
          {
            if (!UOMExists(id))
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

        // POST: api/UOMs
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public ActionResult<UOM> PostUOM(UOM uom)
        {
          _context.UOM.Add(uom);
          _context.SaveChanges();

          return uom;
        }

        // DELETE: api/UOMs/5
        [HttpDelete("{id}")]
        public ActionResult<UOM> DeleteUOM(long id)
        {
          var uom = _context.UOM.Find(id);
          if (uom == null)
          {
            return NotFound();
          }

          _context.UOM.Remove(uom);
          _context.SaveChanges();

          return uom;
        }

        private bool UOMExists(long id)
        {
          return _context.UOM.Any(e => e.Id == id);
        }
  }
}
