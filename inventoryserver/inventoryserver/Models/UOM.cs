using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class UOM
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string UOMCode { get; set; }
    public string UOMName { get; set; }
    public bool Deleted { get; set; }
  }
}
