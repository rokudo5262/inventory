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
  public class ProductGroupDetailController : ControllerBase
  {
    private readonly inventoryContext _context;

    public ProductGroupDetailController(inventoryContext context)
    {
      _context = context;
    }

    // GET: api/ProductGroupDetail
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductGroupDetail>>> GetProductGroupDetail()
    {
      return await _context.ProductGroupDetail.ToListAsync();
    }

    // GET: api/ProductGroupDetail/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductGroupDetail>> GetProductGroupDetail(int id)
    {
      var productGroupDetail = await _context.ProductGroupDetail.FindAsync(id);

      if (productGroupDetail == null)
      {
        return NotFound();
      }

      return productGroupDetail;
    }

    // PUT: api/ProductGroupDetail/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProductGroupDetail(int id, ProductGroupDetail productGroupDetail)
    {
      if (id != productGroupDetail.Id)
      {
        return BadRequest();
      }

      _context.Entry(productGroupDetail).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ProductGroupDetailExists(id))
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
    public async Task<ActionResult<ProductGroupDetail>> PostProductGroupDetail(ProductGroupDetail productGroupDetail)
    {
      _context.ProductGroupDetail.Add(productGroupDetail);
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateException)
      {
        if (ProductGroupDetailExists(productGroupDetail.Id))
        {
          return Conflict();
        }
        else
        {
          throw;
        }
      }

      return CreatedAtAction("GetProductGroupDetail", new { id = productGroupDetail.Id }, productGroupDetail);
    }

    // DELETE: api/ProductGroupDetail/5
    [HttpDelete("{lineId}")]
    public async Task<ActionResult<ProductGroupDetail>> DeleteProductGroupDetail(int id)
    {
      var productGroupDetail = await _context.ProductGroupDetail.FindAsync(id);
      if (productGroupDetail == null)
      {
        return NotFound();
      }
      productGroupDetail.Deleted = true;
      await _context.SaveChangesAsync();

      return productGroupDetail;
    }

    private bool ProductGroupDetailExists(int id)
    {
      return _context.ProductGroupDetail.Any(e => e.Id == id);
    }
  }
}
