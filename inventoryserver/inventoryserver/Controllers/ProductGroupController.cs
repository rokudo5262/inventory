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
  public class ProductGroupController : ControllerBase
  {
    private readonly inventoryContext _context;

    public ProductGroupController(inventoryContext context)
    {
      _context = context;
    }

    // GET: api/ProductGroupDetail
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductGroup>>> GetProductGroup()
    {
      return await _context.ProductGroup.ToListAsync();
    }

    // GET: api/ProductGroupDetail/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductGroup>> GetProductGroup(int id)
    {
      var productGroup = await _context.ProductGroup.FindAsync(id);

      if (productGroup == null)
      {
        return NotFound();
      }

      return productGroup;
    }

    // PUT: api/ProductGroupDetail/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProductGroup(int id, ProductGroup productGroup)
    {
      if (id != productGroup.Id)
      {
        return BadRequest();
      }

      _context.Entry(productGroup).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ProductGroupExists(id))
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

    // POST: api/ProductGroupDetail
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<ProductGroup>> PostProductGroup(ProductGroup productGroup)
    {
      _context.ProductGroup.Add(productGroup);
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateException)
      {
        if (ProductGroupExists(productGroup.Id))
        {
          return Conflict();
        }
        else
        {
          throw;
        }
      }

      return CreatedAtAction("GetProductGroup", new { id = productGroup.Id }, productGroup);
    }

    // DELETE: api/ProductGroupDetail/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<ProductGroup>> DeleteProductGroup(int id)
    {
      var productGroup = await _context.ProductGroup.FindAsync(id);
      if (productGroup == null)
      {
        return NotFound();
      }
      productGroup.Deleted = true;
      await _context.SaveChangesAsync();

      return productGroup;
    }

    private bool ProductGroupExists(int id)
    {
      return _context.ProductGroup.Any(e => e.Id == id);
    }
  }
}
