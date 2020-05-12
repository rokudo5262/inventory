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
    public class ApplyForSecondaryCustomersController : ControllerBase
    {
        private readonly inventoryContext _context;

        public ApplyForSecondaryCustomersController(inventoryContext context)
        {
            _context = context;
        }

        [HttpGet]
    public ActionResult<IEnumerable<ApplyForSecondaryCustomer>> GetApplyForSecondaryCustomer()
        {
            var result = _context.ApplyForSecondaryCustomer.Where(x => !x.Deleted).ToList();


            return result;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApplyForSecondaryCustomer>> GetApplyForSecondaryCustomer(long id)
        {
            var applyForSecondaryCustomer = await _context.ApplyForSecondaryCustomer.FindAsync(id);

            if (applyForSecondaryCustomer == null)
            {
                return NotFound();
            }

            return applyForSecondaryCustomer;
        }

        [HttpPut("{id}")]
        public IActionResult PutApplyForSecondaryCustomer(long id, ApplyForSecondaryCustomer applyForSecondaryCustomer)
        {
            if (id != applyForSecondaryCustomer.Id)
            {
                return BadRequest();
            }
            applyForSecondaryCustomer.LastUpdatedDateTime = DateTime.Now;
            _context.Entry(applyForSecondaryCustomer).State = EntityState.Modified;

            try
            {
                _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplyForSecondaryCustomerExists(id))
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
    public ActionResult<ApplyForSecondaryCustomer> PostApplyForSecondaryCustomer(ApplyForSecondaryCustomer applyForSecondaryCustomer)
    {
      applyForSecondaryCustomer.CreatedDateTime = DateTime.Now;
      applyForSecondaryCustomer.LastUpdatedDateTime = DateTime.Now;
      _context.ApplyForSecondaryCustomer.Add(applyForSecondaryCustomer);
      _context.SaveChangesAsync();

      return applyForSecondaryCustomer;
    }
    // DELETE:
    [HttpPut("delete/{id}")]
    public ActionResult<ApplyForSecondaryCustomer> DeleteApplyForSecondaryCustomer(long id)
    {
      var applyForSecondaryCustomer = _context.ApplyForSecondaryCustomer.Find(id);
      if (applyForSecondaryCustomer == null)
      {
        return NotFound();
      }
      applyForSecondaryCustomer.Deleted = true;
      applyForSecondaryCustomer.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(applyForSecondaryCustomer).State = EntityState.Modified;
      _context.SaveChanges();

      return applyForSecondaryCustomer;
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<ApplyForSecondaryCustomer>> DeleteApplyForSecondaryCustomers(long[] ids)
    {
      var applyForSecondaryCustomers = _context.ApplyForSecondaryCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (applyForSecondaryCustomers == null)
      {
        return NotFound();
      }
      for (int i = 0; i < applyForSecondaryCustomers.Count; i++)
      {
        applyForSecondaryCustomers[i].Deleted = true;
        applyForSecondaryCustomers[i].LastUpdatedDateTime = DateTime.Now;
        _context.Entry(applyForSecondaryCustomers[i]).State = EntityState.Modified;
      }

      _context.SaveChanges();

      return applyForSecondaryCustomers;
    }

    private bool ApplyForSecondaryCustomerExists(long id)
        {
            return _context.ApplyForSecondaryCustomer.Any(e => e.Id == id);
        }
    }
}
