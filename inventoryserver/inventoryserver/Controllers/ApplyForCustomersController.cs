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
    public class ApplyForCustomersController : ControllerBase
    {
        private readonly inventoryContext _context;

        public ApplyForCustomersController(inventoryContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ApplyForCustomer>> GetApplyForCustomer()
        {

            var result = _context.ApplyForCustomer.Where(x => !x.Deleted).ToList();
            for (int i = 0; i < result.Count; i++)
            {
              result[i].ApplyForSecondaryCustomers = _context.ApplyForSecondaryCustomer.Where(x => x.ApplyForCustomerCode == result[i].ApplyForCustomerCode).ToList();
            }
            return result;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApplyForCustomer>> GetApplyForCustomer(long id)
        {
            var applyForCustomer = await _context.ApplyForCustomer.FindAsync(id);

            if (applyForCustomer == null)
            {
                return NotFound();
            }

            return applyForCustomer;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutApplyForCustomer(long id, ApplyForCustomer applyForCustomer)
        {
            if (id != applyForCustomer.Id)
            {
                return BadRequest();
            }
            applyForCustomer.LastUpdatedDateTime = DateTime.Now;
            _context.Entry(applyForCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplyForCustomerExists(id))
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
    public ActionResult<ApplyForCustomer> PostApplyForCustomer(ApplyForCustomer applyForCustomer)
    {
      applyForCustomer.CreatedDateTime = DateTime.Now;
      applyForCustomer.LastUpdatedDateTime = DateTime.Now;
      _context.ApplyForCustomer.Add(applyForCustomer);
      _context.SaveChangesAsync();

      return applyForCustomer;
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<ApplyForCustomer>> DeleteApplyForCustomers(long[] ids)
    {
      var applyForCustomers = _context.ApplyForCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (applyForCustomers == null)
      {
        return NotFound();
      }
      for (int i = 0; i < applyForCustomers.Count; i++)
      {
        applyForCustomers[i].Deleted = true;
        applyForCustomers[i].LastUpdatedDateTime = DateTime.Now;
        _context.Entry(applyForCustomers[i]).State = EntityState.Modified;
      }

      // _context.ApplyForCustomer.Remove(applyForCustomer);
      _context.SaveChanges();

      return applyForCustomers;
    }

    private bool ApplyForCustomerExists(long id)
        {
            return _context.ApplyForCustomer.Any(e => e.Id == id);
        }
    }
}
