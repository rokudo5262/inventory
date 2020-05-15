using System;

namespace inventoryserver.Models
{
  public partial class GoodsGroup
  {
    public long id { get; set; }
    public string code { get; set; }
    public string name { get; set; }
    public string Status { get; set; }
    public string CreatedBy { get; set; }
    public DateTime? CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime? LastUpdatedDateTime { get; set; }
    public bool Deleted { get; set; }
  }
}
