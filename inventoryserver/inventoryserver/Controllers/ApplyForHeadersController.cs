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
    public class ApplyForHeadersController : ControllerBase
    {
        private readonly inventoryContext _context;

        public ApplyForHeadersController(inventoryContext context)
        {
            _context = context;
        }

        [HttpGet]
    public ActionResult<IEnumerable<ApplyForHeader>> GetApplyForHeader()
        {
            var result = _context.ApplyForHeader.Where(x => !x.Deleted).ToList();
            for (int i = 0; i < result.Count; i++)
            {
              result[i].ApplyForCustomers = _context.ApplyForCustomer.Where(x => x.ApplyForCode == result[i].ApplyForCode).ToList();
            }
            return result;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApplyForHeader>> GetApplyForHeader(long id)
        {
            var applyForHeader = await _context.ApplyForHeader.FindAsync(id);

            if (applyForHeader == null)
            {
                return NotFound();
            }
            else
            {
                applyForHeader.ApplyForCustomers = _context.ApplyForCustomer.Where(x => x.ApplyForCode == applyForHeader.ApplyForCode).ToList();
            }

            return applyForHeader;
        }

        [HttpPut("{id}")]
        public IActionResult PutApplyForHeader(long id, ApplyForHeader applyForHeader)
        {
            if (id != applyForHeader.Id)
            {
                return BadRequest();
            }
            applyForHeader.LastUpdatedDateTime = DateTime.Now;
            _context.Entry(applyForHeader).State = EntityState.Modified;

            try
            {
                _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplyForHeaderExists(id))
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

    [HttpPost]
    public ActionResult<ApplyForHeader> PostApplyForHeader(ApplyForHeader applyForHeader)
    {
      applyForHeader.CreatedDateTime = DateTime.Now;
      applyForHeader.LastUpdatedDateTime = DateTime.Now;
      _context.ApplyForHeader.Add(applyForHeader);
      _context.SaveChangesAsync();

      return applyForHeader;
    }
    // DELETE:
    [HttpPut("delete/{id}")]
    public ActionResult<ApplyForHeader> DeleteApplyForHeader(long id)
    {
      var applyForHeader = _context.ApplyForHeader.Find(id);
      if (applyForHeader == null)
      {
        return NotFound();
      }
      applyForHeader.Deleted = true;
      applyForHeader.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(applyForHeader).State = EntityState.Modified;
      _context.SaveChanges();

      return applyForHeader;
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<ApplyForHeader>> DeleteApplyForHeaders(long[] ids)
    {
      var applyForHeaders = _context.ApplyForHeader.Where(x => ids.Contains(x.Id)).ToList();
      if (applyForHeaders == null)
      {
        return NotFound();
      }
      for (int i = 0; i < applyForHeaders.Count; i++)
      {
        applyForHeaders[i].Deleted = true;
        applyForHeaders[i].LastUpdatedDateTime = DateTime.Now;
        _context.Entry(applyForHeaders[i]).State = EntityState.Modified;
      }

      // _context.ApplyForHeader.Remove(applyForHeader);
      _context.SaveChanges();

      return applyForHeaders;
    }

    private bool ApplyForHeaderExists(long id)
        {
            return _context.ApplyForHeader.Any(e => e.Id == id);
        }
    }
}
