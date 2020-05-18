using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class ProductGroup
  {
    public int Id { get; set; }
    public string CompanyCode { get; set; }
	  public string ProductGroupCode { get; set; }
	  public string CustomerCode { get; set; }
	  public string ProductGroupName { get; set; }
	  public string GroupType { get; set; }
	  public string Description { get; set; }
	  public string CreatedBy { get; set; }
	  public DateTime? CreatedDateTime { get; set; }
	  public string LastUpdatedBy { get; set; }
	  public DateTime? LastUpdatedDateTime { get; set; }
	  public bool Deleted { get; set; }
  }
}
