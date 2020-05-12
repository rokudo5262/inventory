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
    public class EmployeesController : ControllerBase
    {
        private readonly inventoryContext _context;

        public EmployeesController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployee()
        {
          var result = _context.Employee.Where(x => !x.Deleted).ToList();
          for (int i = 0; i < result.Count; i++)
          {
            result[i].EmployeeResponsibility = _context.EmployeeResponsibility.Where(x => x.EmployeeCode == result[i].EmployeeCode && x.Deleted==false).ToList();
          }
          return result;
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(string id)
        {
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }
            else
            {
            employee.EmployeeResponsibility = _context.EmployeeResponsibility.Where(x => x.EmployeeCode == employee.EmployeeCode && x.Deleted==false).ToList();
            }
            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(string id, Employee employee)
        {
            if (id != employee.EmployeeCode)
            {
                return BadRequest();
            }
      employee.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // POST: api/Employees
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
       employee.LastUpdatedDateTime = DateTime.Now;
      employee.CreatedDateTime = DateTime.Now;

      _context.Employee.Add(employee);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeExists(employee.EmployeeCode))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployee", new { id = employee.EmployeeCode }, employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(string id)
        {
            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
              var employeeResponsibility = _context.EmployeeResponsibility.Where(x => x.EmployeeCode == employee.EmployeeCode && !x.Deleted).ToList();
              if (employeeResponsibility.Count <= 0)
              {
                employee.LastUpdatedDateTime = DateTime.Now;
                employee.Deleted = true;
                _context.Entry(employee).State = EntityState.Modified;
                await _context.SaveChangesAsync();
              }
              else
              {
                throw new System.ArgumentException(String.Format("Delete fail! Cannot delete Employee {0}. Because exist EmployeeResponsibility", employee.EmployeeCode));
              }
          return employee;
          }

        private bool EmployeeExists(string id)
        {
            return _context.Employee.Any(e => e.EmployeeCode == id);
        }
    }
}
