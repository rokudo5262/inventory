using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public class Calendar
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string CustomerCode { get; set; }
    public string Recurring { get; set; }
    public DateTime WorkingDate { get; set; }
    public string WorkingDay { get; set; }
    public string Description { get; set; }
    public bool NonWorking { get; set; }
    public string Status { get; set; }
    public bool Deleted { get; set; }
  }
}
