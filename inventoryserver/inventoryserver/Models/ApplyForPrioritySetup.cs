using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class ApplyForPrioritySetup
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public int Line { get; set; }
    public int Priority { get; set; }
    public string ApplyForCustomer { get; set; }
    public string ApplyForSecondaryCustomerCode { get; set; }
    public string Source { get; set; }
    public string CreatedBy { get; set; }
    public DateTime? CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime? LastUpdatedDateTime { get; set; }
    public bool? Deleted { get; set; }
    public byte[] RowVersion { get; set; }
  }
}
