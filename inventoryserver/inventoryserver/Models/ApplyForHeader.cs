using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class ApplyForHeader
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string ApplyForCode { get; set; }
    public string CustomerCode { get; set; }
    public string ApplyForName { get; set; }
    public string ApplyForType { get; set; }
    public string Description { get; set; }
    public string Remark { get; set; }
    public string Status { get; set; }
    public string Source { get; set; }
    public string CreatedBy { get; set; }
    public DateTime CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime LastUpdatedDateTime { get; set; }
    public bool Deleted { get; set; }
    public byte[] RowVersion { get; set; }

    public IList<ApplyForCustomer> ApplyForCustomers = new List<ApplyForCustomer>();

  }
}
