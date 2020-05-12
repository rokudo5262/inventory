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
    public class CalendarsController : ControllerBase
    {
        private readonly inventoryContext _context;

        public CalendarsController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/Calendars
        [HttpGet]
        public ActionResult<IEnumerable<Calendar>> GetCalendar()
        {
          return _context.Calendar.ToList();
        }

        // GET: api/Calendars/5
        [HttpGet("{id}")]
        public ActionResult<Calendar> GetCalendar(long id)
        {
            var calendar = _context.Calendar.Find(id);

            if (calendar == null)
            {
              return NotFound();
            }

            return calendar;
        }

        // PUT: api/Calendars/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public IActionResult PutCalendar(long id, Calendar calendar)
        {
          if (id != calendar.Id)
          {
            return BadRequest();
          }

          _context.Entry(calendar).State = EntityState.Modified;

          try
          {
            _context.SaveChanges();
          }
          catch (DbUpdateConcurrencyException)
          {
            if (!CalendarExists(id))
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

        // POST: api/Calendars
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public ActionResult<Calendar> PostCalendar(Calendar calendar)
        {
          _context.Calendar.Add(calendar);
          _context.SaveChanges();

          return calendar;
        }

        // DELETE: api/Calendars/5
        [HttpDelete("{id}")]
        public ActionResult<Calendar> DeleteCalendar(long id)
        {
          var calendar = _context.Calendar.Find(id);
          if (calendar == null)
          {
            return NotFound();
          }

          _context.Calendar.Remove(calendar);
          _context.SaveChanges();

          return calendar;
        }

        private bool CalendarExists(long id)
        {
          return _context.Calendar.Any(e => e.Id == id);
        }
    }
}
