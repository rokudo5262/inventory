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
  public class RoomGroupsController : ControllerBase
  {
    private readonly inventoryContext _context;

    public RoomGroupsController(inventoryContext context)
    {
      _context = context;
    }

    // GET: api/RoomGroups
    [HttpGet]
    public ActionResult<IEnumerable<RoomGroup>> GetRoomGroup()
    {
      var result = _context.RoomGroup.Where(x => x.Deleted == false).ToList();
      return result;
    }

    // GET: api/RoomGroups/5
    [HttpGet("{id}")]
    public async Task<ActionResult<RoomGroup>> GetRoomGroup(int id)
    {
      var roomGroup = await _context.RoomGroup.FindAsync(id);

      if (roomGroup == null)
      {
        return NotFound();
      }

      return roomGroup;
    }

    // PUT: api/RoomGroups/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<ActionResult<RoomGroup>> PutRoomGroup(int id, RoomGroup roomGroup)
    {
      if (id != roomGroup.Id)
      {
        return BadRequest();
      }
      roomGroup.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(roomGroup).State = EntityState.Modified;
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!RoomGroupExists(id))
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

    // POST: api/RoomGroups
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
        public async Task<ActionResult<RoomGroup>> PostRoomGroup(RoomGroup roomGroup)
        {
          roomGroup.LastUpdatedDateTime = DateTime.Now;
          roomGroup.CreatedDateTime = DateTime.Now;

          _context.RoomGroup.Add(roomGroup);
           await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoomGroup", new { id = roomGroup.Id }, roomGroup);
        }

        // DELETE: api/RoomGroups/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RoomGroup>> DeleteRoomGroup(int id)
        {
            var roomGroup = await _context.RoomGroup.FindAsync(id);
            if (roomGroup == null)
            {
                return NotFound();
            }
            roomGroup.Deleted=true;
            roomGroup.LastUpdatedDateTime = DateTime.Now;

      await _context.SaveChangesAsync();

            return roomGroup;
        }

        private bool RoomGroupExists(int id)
        {
            return _context.RoomGroup.Any(e => e.Id == id);
        }
    }
}
