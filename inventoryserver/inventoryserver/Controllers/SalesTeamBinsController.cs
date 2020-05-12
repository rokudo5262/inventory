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
    public class SalesTeamBinsController : ControllerBase
    {
        private readonly inventoryContext _context;

        public SalesTeamBinsController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/SalesTeamBins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesTeamBin>>> GetSalesTeamBin()
        {
            return await _context.SalesTeamBin.ToListAsync();
        }

        // GET: api/SalesTeamBins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesTeamBin>> GetSalesTeamBin(int id)
        {
            var salesTeamBin = await _context.SalesTeamBin.FindAsync(id);

            if (salesTeamBin == null)
            {
                return NotFound();
            }

            return salesTeamBin;
        }

        // PUT: api/SalesTeamBins/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesTeamBin(int id, SalesTeamBin salesTeamBin)
        {
            if (id != salesTeamBin.LineId)
            {
                return BadRequest();
            }
      salesTeamBin.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(salesTeamBin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesTeamBinExists(id))
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

        // POST: api/SalesTeamBins
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<SalesTeamBin>> PostSalesTeamBin(SalesTeamBin salesTeamBin)
        {
      salesTeamBin.LastUpdatedDateTime = DateTime.Now;
      salesTeamBin.CreatedDateTime = DateTime.Now;
      _context.SalesTeamBin.Add(salesTeamBin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SalesTeamBinExists(salesTeamBin.LineId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSalesTeamBin", new { id = salesTeamBin.LineId }, salesTeamBin);
        }

        // DELETE: api/SalesTeamBins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SalesTeamBin>> DeleteSalesTeamBin(int id)
        {
            var salesTeamBin = await _context.SalesTeamBin.FindAsync(id);
            if (salesTeamBin == null)
            {
                return NotFound();
            }
        salesTeamBin.LastUpdatedDateTime = DateTime.Now;
        salesTeamBin.Deleted=true;
            await _context.SaveChangesAsync();

            return salesTeamBin;
        }
        [HttpPut("delete")]
        public ActionResult<IEnumerable<SalesTeamBin>> DeleteSalesTeamBins(long[] ids)
        {
          var salesTeamBins = _context.SalesTeamBin.Where(x => ids.Contains(x.LineId)).ToList();
          if (salesTeamBins == null)
          {
            return NotFound();
          }
          for (int i = 0; i < salesTeamBins.Count; i++)
          {
            salesTeamBins[i].Deleted = true;
            salesTeamBins[i].LastUpdatedDateTime = DateTime.Now;
        _context.Entry(salesTeamBins[i]).State = EntityState.Modified;
          }

          _context.SaveChanges();

          return salesTeamBins;
        }
    private bool SalesTeamBinExists(int id)
        {
            return _context.SalesTeamBin.Any(e => e.LineId == id);
        }
    }
}
