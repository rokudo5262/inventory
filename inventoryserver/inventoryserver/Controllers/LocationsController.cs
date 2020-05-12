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
    public class LocationsController : ControllerBase
    {
        private readonly inventoryContext _context;

        public LocationsController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/Locations
        [HttpGet]
        public  ActionResult<IEnumerable<Location>> GetLocation()
        {
          var result = _context.Location.Where(x=>x.Deleted==false).ToList();
          return result;
        }

        // GET: api/Locations/5
        [HttpGet("{id}")]
        public  ActionResult<Location> GetLocation(long id)
        {
            var location =  _context.Location.Find(id);

            if (location == null)
            {
                return NotFound();
            }

            return location;
        }

    // PUT: api/Locations/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public ActionResult<Location> PutLocation(long id, Location location)
    {
      if (id != location.Id)
      {
        return BadRequest();
      }
      
      location.LastUpdatedDateTime = DateTime.Now;
      
      _context.Entry(location).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!LocationExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return location;
    }

    // POST: api/Locations
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.


        // DELETE: api/Locations/5
        [HttpPut("delete/{id}")]
        public  ActionResult<Location> DeleteLocation(long id)
        {
            var location = _context.Location.Find(id);
            if (location == null)
            {
                return NotFound();
            }
      location.Deleted = true;
      location.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(location).State = EntityState.Modified;
      //_context.Location.Remove(location);
      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!LocationExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return location;
        }

        private bool LocationExists(long id)
        {
            return _context.Location.Any(e => e.Id == id);
        }
    }
}
