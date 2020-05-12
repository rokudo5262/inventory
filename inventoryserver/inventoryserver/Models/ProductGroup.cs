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
	  public string CreateBy { get; set; }
	  public DateTime? CreateDateTime { get; set; }
	  public string LastUpdateBy { get; set; }
	  public DateTime? LastUpdateDateTime { get; set; }
	  public bool Deleted { get; set; }
  }
}
