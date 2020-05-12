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
    public class SecondaryCustomersController : ControllerBase
    {
        private readonly inventoryContext _context;

        public SecondaryCustomersController(inventoryContext context)
        {
            _context = context;
        }

    // GET: api/SecondaryCustomers
    [HttpGet]
    public ActionResult<IEnumerable<SecondaryCustomer>> GetSecondaryCustomer()
    {
      return _context.SecondaryCustomer.ToList();
    }

    // GET: api/SecondaryCustomers/5
    [HttpGet("{id}")]
    public ActionResult<SecondaryCustomer> GetSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);

      if (secondaryCustomer == null)
      {
        return NotFound();
      }

      return secondaryCustomer;
    }

    // PUT: api/SecondaryCustomers/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public ActionResult<SecondaryCustomer> PutSecondaryCustomer(long id, SecondaryCustomer secondaryCustomer)
    {
      if (id != secondaryCustomer.Id)
      {
        return BadRequest();
      }

      _context.Entry(secondaryCustomer).State = EntityState.Modified;

      try
      {
        _context.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!SecondaryCustomerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return secondaryCustomer;
    }

    //[HttpPut("rejected/{id}")]
    //public ActionResult<SecondaryCustomer> PutRejecteSecondaryCustomer(long id, SecondaryCustomer secondaryCustomer)
    //{
    //  if (id != secondaryCustomer.Id)
    //  {
    //    return BadRequest();
    //  }
    //  secondaryCustomer.Status = "Rejected";
    //  _context.Entry(secondaryCustomer).State = EntityState.Modified;

    //  try
    //  {
    //    _context.SaveChanges();
    //  }
    //  catch (DbUpdateConcurrencyException)
    //  {
    //    if (!SecondaryCustomerExists(id))
    //    {
    //      return NotFound();
    //    }
    //    else
    //    {
    //      throw;
    //    }
    //  }

    //  return secondaryCustomer;
    //}
    [HttpPut("delete/{id}")]
    public ActionResult<SecondaryCustomer> DeletesSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);
      if (secondaryCustomer == null)
      {
        return NotFound();
      }
      if (secondaryCustomer.Status == "new")
      {
        secondaryCustomer.Deleted = false;
        _context.Entry(secondaryCustomer).State = EntityState.Modified;
        //_context.SecondaryCustomer.Remove(secondaryCustomer);
        _context.SaveChanges();


      }
      else
      {
        return BadRequest();
      }
       return secondaryCustomer;
     
    }

    [HttpPut("delete")]
    public ActionResult<IEnumerable<SecondaryCustomer>> DeleteSecondaryCustomer(long[] ids)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (secondaryCustomer == null)
      {
        return NotFound();
      }
      
        for (int i = 0; i < secondaryCustomer.Count; i++)
        {
        if (secondaryCustomer[i].Status == "new")
        {
          secondaryCustomer[i].Deleted = true;
          _context.Entry(secondaryCustomer[i]).State = EntityState.Modified;
          _context.SaveChanges();

        }
        else
        {
          return BadRequest();
        }
      }
      return secondaryCustomer;
    }

    [HttpPut("rejectes/{id}")]
    public ActionResult<SecondaryCustomer> RejectesSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);
      if (secondaryCustomer == null)
      {
        return NotFound();
      }
      if (secondaryCustomer.Status == "new")
      {
        secondaryCustomer.Status = "Rejected";
        _context.Entry(secondaryCustomer).State = EntityState.Modified;
        //_context.SecondaryCustomer.Remove(secondaryCustomer);
        _context.SaveChanges();


      }
      else
      {
        return BadRequest();
      }
      return secondaryCustomer;

    }

    [HttpPut("rejectes")]
    public ActionResult<IEnumerable<SecondaryCustomer>> RejectedSecondaryCustomer(long[] ids)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (secondaryCustomer == null)
      {
        return NotFound();
      }

      for (int i = 0; i < secondaryCustomer.Count; i++)
      {
        if (secondaryCustomer[i].Status == "new")
        {
          secondaryCustomer[i].Status = "Rejected";
          _context.Entry(secondaryCustomer[i]).State = EntityState.Modified;
          _context.SaveChanges();

        }
        else
        {
          return BadRequest();
        }
      }
      return secondaryCustomer;
    }

    [HttpPut("reOpen/{id}")]
    public ActionResult<SecondaryCustomer> ReOpensSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);
      if (secondaryCustomer == null)
      {
        return NotFound();
      }
      if (secondaryCustomer.Status == "Rejected")
      {
        secondaryCustomer.Status = "new";
        _context.Entry(secondaryCustomer).State = EntityState.Modified;
        //_context.SecondaryCustomer.Remove(secondaryCustomer);
        _context.SaveChanges();


      }
      else
      {
        return BadRequest();
      }
      return secondaryCustomer;

    }

    [HttpPut("reOpen")]
    public ActionResult<IEnumerable<SecondaryCustomer>> ReOpenSecondaryCustomer(long[] ids)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (secondaryCustomer == null)
      {
        return NotFound();
      }

      for (int i = 0; i < secondaryCustomer.Count; i++)
      {
        if (secondaryCustomer[i].Status == "Rejected")
        {
          secondaryCustomer[i].Status = "new";
          _context.Entry(secondaryCustomer[i]).State = EntityState.Modified;
          _context.SaveChanges();

        }
        else
        {
          return BadRequest();
        }
      }
      return secondaryCustomer;
    }

    [HttpPut("deactivate/{id}")]
    public ActionResult<SecondaryCustomer> deactivateSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);
      if (secondaryCustomer == null)
      {
        return NotFound();
      }
      if (secondaryCustomer.Status == "A")
      {
        secondaryCustomer.Status = "I";
        _context.Entry(secondaryCustomer).State = EntityState.Modified;
        //_context.SecondaryCustomer.Remove(secondaryCustomer);
        _context.SaveChanges();


      }
      else
      {
        return BadRequest();
      }
      return secondaryCustomer;

    }

    [HttpPut("deactivate")]
    public ActionResult<IEnumerable<SecondaryCustomer>> deactivateSecondaryCustomer(long[] ids)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (secondaryCustomer == null)
      {
        return NotFound();
      }

      for (int i = 0; i < secondaryCustomer.Count; i++)
      {
        if (secondaryCustomer[i].Status == "A")
        {
          secondaryCustomer[i].Status = "I";
          _context.Entry(secondaryCustomer[i]).State = EntityState.Modified;
          _context.SaveChanges();

        }
        else
        {
          return BadRequest();
        }
      }
      return secondaryCustomer;
    }

    [HttpPut("approved/{id}")]
    public ActionResult<SecondaryCustomer> approvedSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);
      if (secondaryCustomer == null)
      {
        return NotFound();
      }
      if (secondaryCustomer.Status == "I" || secondaryCustomer.Status == "new" )
      {
        secondaryCustomer.Status = "A";
        _context.Entry(secondaryCustomer).State = EntityState.Modified;
        //_context.SecondaryCustomer.Remove(secondaryCustomer);
        _context.SaveChanges();


      }
      else
      {
        return BadRequest();
      }
      return secondaryCustomer;

    }

    [HttpPut("approved")]
    public ActionResult<IEnumerable<SecondaryCustomer>> approvedSecondaryCustomer(long[] ids)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Where(x => ids.Contains(x.Id)).ToList();
      if (secondaryCustomer == null)
      {
        return NotFound();
      }

      for (int i = 0; i < secondaryCustomer.Count; i++)
      {
        if (secondaryCustomer[i].Status == "I" || secondaryCustomer[i].Status == "new")
        {
          secondaryCustomer[i].Status = "A";
          _context.Entry(secondaryCustomer[i]).State = EntityState.Modified;
          _context.SaveChanges();

        }
        else
        {
          return BadRequest();
        }
      }
      return secondaryCustomer;
    }
    // POST: api/SecondaryCustomers
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public ActionResult<SecondaryCustomer> PostSecondaryCustomer(SecondaryCustomer secondaryCustomer)
    {
      _context.SecondaryCustomer.Add(secondaryCustomer);
      _context.SaveChanges();

      return CreatedAtAction("GetSecondaryCustomer", new { id = secondaryCustomer.Id }, secondaryCustomer);
    }

    // DELETE: api/SecondaryCustomers/5
    [HttpDelete("{id}")]
    public ActionResult<SecondaryCustomer> DeleteSecondaryCustomer(long id)
    {
      var secondaryCustomer = _context.SecondaryCustomer.Find(id);
      if (secondaryCustomer == null)
      {
        return NotFound();
      }

      _context.SecondaryCustomer.Remove(secondaryCustomer);
      _context.SaveChanges();

      return secondaryCustomer;
    }

    private bool SecondaryCustomerExists(long id)
        {
            return _context.SecondaryCustomer.Any(e => e.Id == id);
        }
    }
}
