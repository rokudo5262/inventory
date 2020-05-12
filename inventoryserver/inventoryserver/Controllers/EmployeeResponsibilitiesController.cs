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
    public class EmployeeResponsibilitiesController : ControllerBase
    {
        private readonly inventoryContext _context;

        public EmployeeResponsibilitiesController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeResponsibilities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeResponsibility>>> GetEmployeeResponsibility()
        {
            return await _context.EmployeeResponsibility.ToListAsync();
        }

        // GET: api/EmployeeResponsibilities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeResponsibility>> GetEmployeeResponsibility(int id)
        {
            var employeeResponsibility = await _context.EmployeeResponsibility.FindAsync(id);

            if (employeeResponsibility == null)
            {
                return NotFound();
            }

            return employeeResponsibility;
        }

        // PUT: api/EmployeeResponsibilities/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeResponsibility(int id, EmployeeResponsibility employeeResponsibility)
        {
            if (id != employeeResponsibility.LineId)
            {
                return BadRequest();
            }

      employeeResponsibility.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(employeeResponsibility).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeResponsibilityExists(id))
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

        // POST: api/EmployeeResponsibilities
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmployeeResponsibility>> PostEmployeeResponsibility(EmployeeResponsibility employeeResponsibility)
        {
      employeeResponsibility.LastUpdatedDateTime = DateTime.Now;
      employeeResponsibility.CreatedDateTime = DateTime.Now;
      _context.EmployeeResponsibility.Add(employeeResponsibility);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeResponsibility", new { id = employeeResponsibility.LineId }, employeeResponsibility);
        }

        // DELETE: api/EmployeeResponsibilities/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeResponsibility>> DeleteEmployeeResponsibility(int id)
        {
            var employeeResponsibility = await _context.EmployeeResponsibility.FindAsync(id);
            if (employeeResponsibility == null)
            {
                return NotFound();
            }
            employeeResponsibility.LastUpdatedDateTime = DateTime.Now;
            employeeResponsibility.Deleted = true;
            await _context.SaveChangesAsync();
            return employeeResponsibility;
        }
        [HttpPut("delete")]
        public ActionResult<IEnumerable<EmployeeResponsibility>> DeleteEmployeeResponsibilities(long[] ids)
        {
          var employeeResponsibilities = _context.EmployeeResponsibility.Where(x => ids.Contains(x.LineId)).ToList();
          if (employeeResponsibilities == null)
          {
            return NotFound();
          }
          for (int i = 0; i < employeeResponsibilities.Count; i++)
          {
            employeeResponsibilities[i].Deleted = true;
            employeeResponsibilities[i].LastUpdatedDateTime = DateTime.Now;
            _context.Entry(employeeResponsibilities[i]).State = EntityState.Modified;
          }

          _context.SaveChanges();

          return employeeResponsibilities;
        }
        private bool EmployeeResponsibilityExists(int id)
        {
            return _context.EmployeeResponsibility.Any(e => e.LineId == id);
        }
    }
}
