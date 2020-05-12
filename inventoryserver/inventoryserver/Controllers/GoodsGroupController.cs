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
    public class GoodsGroupController : ControllerBase
    {
        private readonly inventoryContext _context;

        public GoodsGroupController(inventoryContext context)
        {
            _context = context;
        }

        // GET: api/GoodsGroups
        [HttpGet]
        public ActionResult<IEnumerable<GoodsGroup>> GetGoodsGroup()
        {
            return _context.GoodsGroup.ToList();
        }

        // GET: api/GoodsGroups/5
        [HttpGet("{id}")]
        public ActionResult<GoodsGroup> GetGoodsGroup(long id)
        {
            var GoodsGroup = _context.GoodsGroup.Find(id);

            if (GoodsGroup == null)
            {
                return NotFound();
            }

            return GoodsGroup;
        }

        // PUT: api/GoodsGroups/5
        [HttpPut("{id}")]
        public IActionResult PutGoodsGroup(long id, GoodsGroup GoodsGroup)
        {
            if (id != GoodsGroup.id)
            {
                return BadRequest();
            }

            _context.Entry(GoodsGroup).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GoodsGroupExists(id))
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

        // POST: api/GoodsGroups
        [HttpPost]
        public ActionResult<GoodsGroup> PostGoodsGroup(GoodsGroup GoodsGroup)
        {
            _context.GoodsGroup.Add(GoodsGroup);
            _context.SaveChanges();

            return GoodsGroup;
        }

        // DELETE: api/GoodsGroups/5
        [HttpDelete("{id}")]
        public ActionResult<GoodsGroup> DeleteGoodsGroup(long id)
        {
            var GoodsGroup = _context.GoodsGroup.Find(id);
            if (GoodsGroup == null)
            {
                return NotFound();
            }

            _context.GoodsGroup.Remove(GoodsGroup);
            _context.SaveChanges();

            return GoodsGroup;
        }

        private bool GoodsGroupExists(long id)
        {
            return _context.GoodsGroup.Any(e => e.id == id);
        }
    }
}
