 using inventoryserver.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace inventoryserver.Controllers
{
  [Route("api/[controller]")]
  [EnableCors("MyPolicy")]
  [ApiController]
  public class CodeMastersController : ControllerBase
  {
    private readonly inventoryContext _context;

    public CodeMastersController(inventoryContext context)
    {
      _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<CodeMaster>> GetCodeMaster()
    {
      return  _context.CodeMaster.ToList();
    }
    [HttpGet("{id}")]
    public ActionResult<CodeMaster> GetCodeMaster(long id)
    {
      var codeMaster = _context.CodeMaster.Find(id);

      if (codeMaster == null)
      {
        return NotFound();
      }

      return codeMaster;
    }
    
    [HttpPost]
    public ActionResult<CodeMaster> PostCodeMaster(CodeMaster codeMaster)
    {
      codeMaster.CreatedDateTime = DateTime.Now;
      //codeMaster.LastUpdateDate = DateTime.Now;
      _context.CodeMaster.Add(codeMaster);
      _context.SaveChanges();

      return codeMaster;
    }

    [HttpPut("{id}")]
    public ActionResult<CodeMaster> PutCodeMaster(long id, CodeMaster codeMaster)
    {
      if (id != codeMaster.Id)
      {
        return BadRequest();
      }
      codeMaster.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(codeMaster).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CodeMasterExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return codeMaster;
    }

    // DELETE:
    [HttpPut("delete/{id}")]
    public ActionResult<CodeMaster> DeleteCodeMaster(long id)
    {
      var codeMaster = _context.CodeMaster.Find(id);
      if (codeMaster == null)
      {
        return NotFound();
      }
      
      var codeDetails = _context.CodeDetail.Where(x => x.CMcode == codeMaster.CMcode && !x.Deleted).ToList();
      
      if (codeDetails.Count <= 0)
      { 
        codeMaster.Deleted = true;
        codeMaster.LastUpdatedDateTime = DateTime.Now;
        _context.Entry(codeMaster).State = EntityState.Modified;
        // _context.CodeMaster.Remove(codeMaster);
        _context.SaveChanges();
      }
      else
      {
        throw new System.ArgumentException(String.Format("Delete fail! Cannot delete codemaster {0}. Because exist codeDetail", codeMaster.CMcode));
      }

      return codeMaster;
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<CodeMaster>> DeleteCodeMasters(long[] ids)
    {
      var codeMasters = _context.CodeMaster.Where(x => ids.Contains(x.Id)).ToList();
      if (codeMasters == null)
      {
        return NotFound();
      }
      for(int i=0; i< codeMasters.Count; i++)
      {
        //codeMasters[i].Deleted = true;
        //codeMasters[i].LastUpdateDate = DateTime.Now;
        //_context.Entry(codeMasters[i]).State = EntityState.Modified;
        var codeDetails = _context.CodeDetail.Where(x => x.CMcode == codeMasters[i].CMcode && !x.Deleted).ToList();
        if (codeDetails.Count <= 0)
        {
          codeMasters[i].Deleted = true;
          codeMasters[i].LastUpdatedDateTime = DateTime.Now;
          _context.Entry(codeMasters[i]).State = EntityState.Modified;
          // _context.CodeMaster.Remove(codeMaster);
          //_context.SaveChanges();
        }
        else
        {
          throw new System.ArgumentException(String.Format("Delete fail! Cannot delete codemaster {0}. Because exist codeDetail", codeMasters[i].CMcode));
        }
      }
     
      // _context.CodeMaster.Remove(codeMaster);
      _context.SaveChanges();

      return codeMasters;
    }
    // SYSTEM:
    [HttpPut("system/{id}")]
    public ActionResult<CodeMaster> SystemCodeMaster(long id)
    {
      var codeMaster = _context.CodeMaster.Find(id);
      if (codeMaster == null)
      {
        return NotFound();
      }
      codeMaster.SystemCode = !codeMaster.SystemCode;
      codeMaster.LastUpdatedDateTime = DateTime.Now;
      _context.Entry(codeMaster).State = EntityState.Modified;
      _context.SaveChanges();

      return codeMaster;
    }

    [HttpPut("system")]
    public ActionResult<IEnumerable<CodeMaster>> SystemCodeMasters(long[] ids)
    {
      var codeMasters = _context.CodeMaster.Where(x => ids.Contains(x.Id)).ToList();
      if (codeMasters == null)
      {
        return NotFound();
      }
      for (int i = 0; i < codeMasters.Count; i++)
      {
        codeMasters[i].SystemCode = !codeMasters[i].SystemCode;
        codeMasters[i].LastUpdatedDateTime = DateTime.Now;
        _context.Entry(codeMasters[i]).State = EntityState.Modified;
      }
      _context.SaveChanges();

      return codeMasters;
    }

    private bool CodeMasterExists(long id)
    {
      return _context.CodeMaster.Any(e => e.Id == id);
    }
  }

}
