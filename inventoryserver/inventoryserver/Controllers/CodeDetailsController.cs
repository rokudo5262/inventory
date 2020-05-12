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
  public class CodeDetailsController : ControllerBase
  {
    private readonly inventoryContext _context;

    public CodeDetailsController(inventoryContext context)
    {
      _context = context;
    }

    // GET
    [HttpGet]
    public ActionResult<IEnumerable<CodeDetail>> GetCodeDetail()
    {
   
      var result = _context.CodeDetail.Where(x => !x.Deleted).ToList();
      return result;
    }

    // GET
    [HttpGet("{id}")]
    public ActionResult<CodeDetail> GetCodeDetail(long id)
    {
      var codeDetail = _context.CodeDetail.Find(id);

      if (codeDetail == null)
      {
        return NotFound();
      }

      return codeDetail;
    }

    [HttpGet("cMId/{id}")]
    public ActionResult<IEnumerable<CodeDetail>> GetCodeDetailBaseonCodeMaster(long id)
    {
      //var codeDetail = _context.CodeDetail.Find(id);
      var codeMaster = _context.CodeMaster.Find(id);

      if (codeMaster == null)
      {
        return NotFound();
      }
      var codeDetails = _context.CodeDetail.Where(x => x.CMcode == codeMaster.CMcode && !x.Deleted).ToList();

      return codeDetails;
    }

    [HttpPut("{id}")]
    public IActionResult PutCodeDetail(long id, CodeDetail codeDetail)
    {
      if (id != codeDetail.Id)
      {
        return BadRequest();
      }
      codeDetail.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(codeDetail).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CodeDetailExists(id))
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

    // POST
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]

    public ActionResult<CodeDetail> PostCodeDetail(CodeDetail codeDetail)
    {
      codeDetail.CreatedDateTime = DateTime.Now;
      //codeDetail.LastUpdatedDateTime = DateTime.Now;
      _context.CodeDetail.Add(codeDetail);
      _context.SaveChanges();

      return codeDetail;
    }

    // DELETE:
    [HttpPut("delete/{id}")]
    public ActionResult<CodeDetail> DeleteCodeDetail(long id)
    {
      var codeDetail = _context.CodeDetail.Find(id);
      if (codeDetail == null)
      {
        return NotFound();
      }
      codeDetail.Deleted = true;
      codeDetail.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(codeDetail).State = EntityState.Modified;
      _context.SaveChanges();

      return codeDetail;
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<CodeDetail>> DeleteCodeDetails(long[] ids)
    {
      var codeDetails = _context.CodeDetail.Where(x => ids.Contains(x.Id)).ToList();
      if (codeDetails == null)
      {
        return NotFound();
      }
      for (int i = 0; i < codeDetails.Count; i++)
      {
        codeDetails[i].Deleted = true;
        _context.Entry(codeDetails[i]).State = EntityState.Modified;
      }

      _context.SaveChanges();

      return codeDetails;
    }

    private bool CodeDetailExists(long id)
    {
      return _context.CodeDetail.Any(e => e.Id == id);
    }
  }
}
