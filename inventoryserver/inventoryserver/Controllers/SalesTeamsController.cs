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
    public class SalesTeamsController : ControllerBase
    {
        private readonly inventoryContext _context;

        public SalesTeamsController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/SalesTeams
        [HttpGet]
        public ActionResult<IEnumerable<SalesTeam>> GetSalesTeam()
        {
            var result = _context.SalesTeam.Where(x => !x.Deleted).ToList();
            for (int i = 0; i < result.Count; i++)
            {
              result[i].SalesTeamBin = _context.SalesTeamBin.Where(x => x.SalesTeamCode == result[i].SalesTeamCode && x.Deleted == false).ToList();
            }
            return result;
          }
    // GET: api/SalesTeams/salesteamdetails
    [HttpGet("salesteamdetails")]
    public async Task<ActionResult<IEnumerable<SalesTeam>>> GetSalesTeamBin()
    {
      return await _context.SalesTeam
                  .Include(e => e.SalesTeamBin)
                  .ToListAsync();
    }
    // GET: api/SalesTeams/5
    [HttpGet("{id}")]
        public async Task<ActionResult<SalesTeam>> GetSalesTeam(string id)
        {
            var salesTeam = await _context.SalesTeam.FindAsync(id);

      if (salesTeam == null)
      {
        return NotFound();
      }
      else
      {
        salesTeam.SalesTeamBin = _context.SalesTeamBin.Where(x => x.SalesTeamCode == salesTeam.SalesTeamCode && x.Deleted == false).ToList();
      }
      return salesTeam;
        }
        // GET: api/salesteamdetails/5
        [HttpGet("salesteamdetails/{id}")]
        public ActionResult<SalesTeam> GetSalesTeamDetails(string id)
        {
            var salesTeam = _context.SalesTeam
              .Include(e => e.SalesTeamBin)
              .Where(e => e.SalesTeamCode == id)
              .FirstOrDefault();
            if (salesTeam == null)
            {
                return NotFound();
            }

            return salesTeam;
        }
        // PUT: api/SalesTeams/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.

        [HttpPut("{id}")]
          public async Task<IActionResult> PutSalesTeam(string id, SalesTeam salesTeam)
          {
            if (id != salesTeam.SalesTeamCode)
            {
              return BadRequest();
            }
            salesTeam.LastUpdatedDateTime = DateTime.Now;
            _context.Entry(salesTeam).State = EntityState.Modified;

            try
            {
              await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
              if (!SalesTeamExists(id))
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

    // POST: api/SalesTeams
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
        public async Task<ActionResult<SalesTeam>> PostSalesTeam(SalesTeam salesTeam)
        {
          salesTeam.LastUpdatedDateTime = DateTime.Now;
          salesTeam.CreatedDateTime = DateTime.Now;
          _context.SalesTeam.Add(salesTeam);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SalesTeamExists(salesTeam.SalesTeamCode))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSalesTeam", new { id = salesTeam.SalesTeamCode }, salesTeam);
        }

        // DELETE: api/SalesTeams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SalesTeam>> DeleteSalesTeam(string id)
        {
            var salesTeam = await _context.SalesTeam.FindAsync(id);
            if (salesTeam == null)
            {
                return NotFound();
            }
            var salesTeamBin = _context.SalesTeamBin.Where(x => x.SalesTeamCode == salesTeam.SalesTeamCode && !x.Deleted).ToList();
            if (salesTeamBin.Count <= 0)
            {
                salesTeam.Deleted = true;
                salesTeam.LastUpdatedDateTime = DateTime.Now;
                _context.Entry(salesTeam).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            else
            {
               throw new System.ArgumentException(String.Format("Delete fail! Cannot delete SalesTeam {0}. Because exist SalesTeamBin", salesTeam.SalesTeamCode));
            }
            return salesTeam;
        }

        private bool SalesTeamExists(string id)
        {
            return _context.SalesTeam.Any(e => e.SalesTeamCode == id);
        }
    }
}
